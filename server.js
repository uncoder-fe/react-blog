var http = require('http');
var url = require('url');
var querystring = require("querystring");

//引入mongodb
var MongoDb = require('./store/MongoDb.js');
var mydb = new MongoDb();

http.createServer(function (req, res) {
	
	var urlObj = url.parse(req.url);
	if(urlObj.pathname == "/favicon.ico") return;
	
	if(urlObj.pathname == "/getArticles"){
		mydb.findAll(function(data){
			res.writeHead(200, { 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*'}); 
			res.write(JSON.stringify(data));
			res.end();
		})
    };
	if(urlObj.pathname == "/getArticle"){
		var params = querystring.parse(urlObj['query']);
		console.log(params);
		mydb.find(params,function(data){
			res.writeHead(200, { 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*'}); 
			res.write(JSON.stringify(data));
			res.end();
		})
	}
	if(urlObj.pathname == "/postArticle"){
		var postData = '';
		req.addListener("data",function(data){
			postData += data;
		});
		req.addListener("end",function(){
			var params = querystring.parse(postData);
			var data = {
				title:params.title,
				img:"./images/banner"+Math.floor(Math.random()*(3)+1)+".png",
				text:params.text,
				author:"uncoder",
				date:(new Date()).getFullYear()+"-"+(new Date()).getMonth()+"-"+(new Date()).getDate()
			}
			mydb.insert(data,function(){
				res.writeHead(200, { 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*'}); 
				res.write("add success");
				res.end();
			});
		});
	}
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
