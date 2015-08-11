//系统组件
import React from "react";
import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';


//公共组件视图
import { LogoView, FooterView } from './views/common';

import IndexView from "./views/index";
import ArticleView from "./views/article";
import WriteView from "./views/write";
import AboutView from "./views/about";

let App = React.createClass({
  render () {
    return (
      <div className="wrap">
        <LogoView />
        <nav>
          <ul>
            <li><Link to="/index">Index</Link></li>
            <li><Link to="/write">Write</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
        <FooterView />
      </div>
    )
  }
});

let routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: ' ', component: IndexView },
    { path: 'index', component: IndexView },
    { path: 'article/:title', component: ArticleView },
    { path: 'write', component: WriteView },
    { path: 'about', component: AboutView }
  ]
};

React.render(<Router history={history} children={routes}/>, document.body);