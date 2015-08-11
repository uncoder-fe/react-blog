module.exports={
	entry:"./app.js",
	output:{
		path:"./bulid",
		filename:"app.js"
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:'babel-loader'},
			{test:/\.jsx?$/,loader:'babel-loader'},
			//{test: /\.css$/, loader: 'css-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
		]
	},
	resolve:{
		extensions:['','.js','.jsx']
	}
}