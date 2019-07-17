# 这是一个练习VUE的项目

##用（传统方式）命令行把修改后的代码上传到码云
1.git add .
2.git commit -m "提交信息"
3.git push

## 制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
  + 在制作 购物车小图标的时候，操作会相对多一些
  + 先把扩展图标的 css 样式，拷贝到项目中
  + 拷贝字体库ttf 文件，到项目中
  + 为购物车小图标，添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个 router-view来展示路由匹配到的组件

## 改造tabbar为router-link

## 设置路由高亮

##点击tabbar中的路由链接，展示对应的路由组件
注意:在弄mui的时候还是直接导入的文件，在index.js导入显示不了图标，暂时我还需解决这个问题

## 制作首页轮播图布局

## 加载首页轮播图布局

## 加载首页轮播图数据
1.在server做了一个粗糙的数据接口，以便于轮播图发送请求jsonp请求
