import React from "react";

let WriteView = React.createClass({
  render:function(){
    return (
      <div>
        <p className="new-write">新建一篇文章</p>
        <form action="http://127.0.0.1:1337/postArticle" method="post">
          <div className="write-title"><label>标题:</label><input type="text" placeholder="这是文章标题啊..." name="title"/></div>
          <div className="write-img"><label>配图:</label><input type="file" /></div>
          <div className="write-txt">
              <textarea name="text"></textarea>
          </div>
          <input type="submit" value="确定"/>
        </form>
      </div>
    )
  }
});

module.exports = WriteView;