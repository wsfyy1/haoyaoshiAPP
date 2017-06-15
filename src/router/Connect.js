var express = require("express");
var app = express();  //请求express模块
var http = require("http").Server(app);  //创建服务器
var io = require("socket.io")(http);  //请求模块，监听服务器

app.get("/Connect",function(req,res){
 	res.sendFile(__dirname+"./src/components/Connect.vue")
 });

//io模块和服务器建立连接
io.on("connection",function(socket){
	//soket.broadcast.emit("欢迎进入聊天室");  //后台接收前台传过来的数据
	socket.on("hungry",function(data){
		io.emit("hungry",data)
	});
	socket.on("disconnect",function(){
		console.log("有人断开连接了")
	})
});
http.listen(8080,function(){
	console.log("服务器运行在3001端口上")
});





