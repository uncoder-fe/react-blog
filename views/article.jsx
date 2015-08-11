import React from "react";
import request from 'superagent';

let ArticleView = React.createClass({
	getInitialState:function(){
		return {'data':{title:"test1",img:"./images/banner1.png",text:"简要内容1...........",author:"uncoder",date:"2014-2-30"}};
	},
	componentWillMount:function(){
		let title = this.props.params.title;
		let self = this;
		request.get('http://127.0.0.1:1337/getArticle?title='+title)
			.set('Accept', 'application/json')
			.end(function(err, res){
				let data = res.body;
				self.setState({'data':data[0]});
			});
	},
	render:function(){
	 let data = this.state.data;
	 return (
	 	<div className="article">
			<p className="article-title">{data.title}</p>
			<p className="article-info">作者:<span className="author">{data.author}</span>|<span className="date">发表日期:{data.date}</span></p>
			<p className="article-img"><img src={data.img} /></p>
			<div className="article-text">{data.text}</div>
		</div>
	 )
	}
});

module.exports = ArticleView;