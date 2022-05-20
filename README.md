# chrome-css-input-extension
![image](https://github.com/zaric966/chrome-css-input-extension/blob/main/images/icon-new.png)
A Chrome extension for input formatted css conveniently 
# 浏览器css编辑器
本插件集成了ACE editor 和 自制css提示菜单，能快速更改页面样式，加快样式构建，避免从控制台一个个找dom元素改样式的尴尬场面
#### 插件预览
![image](https://github.com/zaric966/chrome-css-input-extension/blob/main/images/fast-view.png)
#### 使用方法
本插件无毒无害，可放心使用，使用时只需要点开chrome的右上角 --> 更多工具 --> 扩展程序 中 打开 **开发者模式**，并加载散装插件即可，在不刷新页面的情况下，会自己读取已经填写到页面上的css样式，同时，写入css代码时会实时更新页面样式
#### TODOS
 * down----- 1.添加滚动定位功能 保证选中的item永远在视野范围内----down
 * down----- 2. 获取当前行中的输入，动态判断应该匹配的是csskey还是value，value匹配时忽略前方空格，仅从冒号前匹配\w，
 *    最好能获取左右键和点击的位置光标前方，不然推荐值可能有误（没法处理就移动或者点击后直接关掉context menu）----down
 * down----- 3. 菜单点击其他区域自动关闭，hover时动态添加active，点中后取值----down;
 * down----- 4. 输入时的模糊搜索，比如输入wi 匹配 width ..... white-space 按照 wi_,w_i,_w_i_来推荐，value同理,
 *    最后用一个set去存要显示的推荐内容，避免重复----down
 * 5. 菜单显示位置跟随输入时光标位置
 * 6. 跟随窗口大小适配菜单栏大小，最小不小于12px的字体，如果窗口太小装不下，用一个confirm提示一次，
 *    是否再次显示存在chrome.storage中，并在插件右上角显示感叹号可以再次打开这个confirm
