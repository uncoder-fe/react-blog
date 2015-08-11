import React from "react";

// 首页LOGO大图
let LogoView = React.createClass({
	render:function(){
		return (
			<div className="logo">
				<img src='./images/logo.jpg'/>
			</div>
		)
	}
});
//定义footer
let FooterView = React.createClass({
	render:function(){
		return (
			<div className="footer">
				©2015 ，made by uncoder.
			</div>
		)
	}
});
module.exports = {LogoView,FooterView};