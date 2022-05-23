const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');


const cssCollection = [];
(async () => {
  const browser = await puppeteer.launch({
      headless: true,
      defaultViewport:{
          width:1920,
          height:1080,
          deviceScaleFactor:0.8,
          timeout:30000,
      }
    });
  const page = await browser.newPage();
  await page.goto('https://www.w3schools.com/cssref/css4_pr_accent-color.asp');
  while(true){
    //   判断是否存在next按钮，不存在则跳出循环
    const nextBtn = await page.$('#main > div:nth-child(3) .w3-right.w3-btn');
    const propertyDom = await page.$('.w3-code.w3-border.notranslate')
    if(!nextBtn || nextBtn === null || !propertyDom || propertyDom === null){
        break ;
    }
    // 获取css属性及参数值
    const cssStr = await page.evaluate(() => document.querySelector('.w3-code.w3-border.notranslate').innerText);
    console.log('cssStr:',cssStr);
    cssCollection.push(cssStr);
  //   点击下一个 等待导航
    const [response] = await Promise.all([
          page.waitForNavigation({
            timeout: 15000
          }),
          page.click('#main > div:nth-child(3) .w3-right.w3-btn')
      ]);
  }
  await browser.close();
  console.log('最终收集结果: ', cssCollection);
  fs.writeFileSync('./cssProperties.txt','');
  cssCollection.map((item)=>{
    fs.appendFileSync('./cssProperties.txt', item+'\n')
  });
})();