# ManhuaguiPyCrawler
用Python爬取漫画柜的漫画
## 开发环境
- 操作系统: Win10
- 编辑器: VS Code
- 编程语言: Python2
## 实现原理
用Python+Selenium操作Chrome浏览器, 进行漫画网站的浏览, 按钮点击等, 从而将目标漫画一页一页地下载到本地. 
## 优点
能有效地下载那些异步加载的图片(大多数漫画网站都是采取这种方式加载图片).
## 缺点
程序运行的时候会自动打开一个Chrome窗口, 因此会占用比较多的系统资源; 不能关掉该窗口, 但可以最小化. 
## 注意
需要安装python第三方库:
``` cmd
py -3 -m pip install requests, selenium, bs4, lxml
```
需要安装chromedriver
