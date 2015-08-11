import React from "react";

import ArticleList from "./articleList";

let IndexView = React.createClass({
	render:function(){
		return (
			<div className="article-list">
				<ArticleList />
			</div>
		)
	}
});

module.exports = IndexView;
