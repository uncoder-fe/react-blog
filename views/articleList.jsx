import React from "react";
import { Router, Route, Link } from 'react-router';
import request from 'superagent';
//文章列表展示
let ArticleList = React.createClass({
	getInitialState:function(){
		let data = [
			{title:"test1",img:"./images/banner1.png",text:"简要内容1...........",author:"uncoder",date:"2014-2-30"},
			{title:"test2",img:"./images/banner2.png",text:"简要内容2...........",author:"uncoder",date:"2015-12-23"},
			{title:"test3",img:"./images/banner3.png",text:"简要内容3...........",author:"uncoder",date:"2016-2-10"}
		];
		return {data:data};
	},
	componentWillMount:function(){
		let self = this;
		request.get('http://127.0.0.1:1337/getArticles')
			.set('Accept', 'application/json')
			.end(function(err, res){
				let data = res.body;
				self.setState({data:data});
			});
	},
	render:function(){
		let data = this.state.data;
		let NodesList = data.map(function(item,i){
			return <ArticleItem data={item} />;
		});
		return (
			<div>
				{NodesList}
			</div>
		);
	}
});

let ArticleItem = React.createClass({
	render:function(){
		let data = this.props.data;
		let href = '/article/'+this.props.data.title;
		return (
			<div className="article-item">
				<p className="title"><Link to={href}>{data.title}</Link></p>
				<p className="info">作者:<span className="author">{data.author}</span>|<span className="date">发表日期:{data.date}</span></p>
				<p className="img"><img src={data.img} /></p>
				<div className="text">{data.text}</div>
			</div>
		)
	}
});

module.exports = ArticleList;