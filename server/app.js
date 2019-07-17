// 引包
var express = require('express')
var url = require('url')

var app = express()


// 开放服务器资源
app.use('/public/',express.static('public'))

// 设置响应的轮播图资源
var lunbo = [
    {
      img: "http://127.0.0.1:4000/public/images/lunbo1.jpg",
      url: "http://127.0.0.1:3000/#/home"
    },
    {
      img: "http://127.0.0.1:4000/public/images/lunbo2.jpg",
      url: "http://127.0.0.1:3000/#/home"
    },
    {
      img: "http://127.0.0.1:4000/public/images/lunbo3.jpg",
      url: "http://127.0.0.1:3000/#/home"
    }
  ]

var lunboJson = JSON.stringify(lunbo)

app.get('/lunbo', function(req, res){
  res.setHeader('Content-Type','text/json;charset=utf-8')
  var query = url.parse(req.url,true).query
  res.end(`${query.callback}(${lunboJson})`)
})

app.listen(4000,function(){
  console.log('server is runing')
})

