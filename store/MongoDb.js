var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

//连接数据库
function getDb(cb){
	MongoClient.connect(url, function(err, db) { cb(db); });	
};

//操作数据库
function MongoDb(){};

//查询单个
MongoDb.prototype.find=function(data,cb){
	getDb(function(db){
		var collection = db.collection('article');
		collection.find(data).toArray(function(error,result){
			if(error){
				console.log("Find Error"+error);
				return;
			}
			cb(result);
			db.close();
		});
	});
}
//查询所有
MongoDb.prototype.findAll=function(cb){
	getDb(function(db){
		var collection = db.collection('article');
		collection.find().toArray(function(error,result){
			if(error){
				console.log("Find Error"+error);
				return;
			}
			cb(result);
			db.close();
		});
	});
}
//插入
MongoDb.prototype.insert=function(data,cb){
	getDb(function(db){
		var collection = db.collection('article');
		collection.insert(data,function(error,result){
			if(error){
				console.log("Insert Error"+error);
				return;
			}
			cb(result);
			db.close();
		});
	});
}
//更新
MongoDb.prototype.update=function(name,data,cb){
	getDb(function(db){
		var collection = db.collection('article');
		collection.update(name,data,function(error,result){
			if(error){
				console.log("Update Error"+error);
				return;
			}
			cb(result);
			db.close();
		});
	});
}
//删除
MongoDb.prototype.remove=function(data,cb){
	getDb(function(db){
		var collection = db.collection('article');
		collection.remove(data,function(error,result){
			if(error){
				console.log("Remove Error"+error);
				return;
			}
			cb(result);
			db.close();
		});
	});
}
module.exports = MongoDb;