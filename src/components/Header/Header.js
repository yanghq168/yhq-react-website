'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.less';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand-name" href="#">珠峰前端微课堂</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">首页</a></li>
              <li><Link to="/react">React</Link></li>
              <li><Link to="/es6">ECMAScript6</Link></li>
              <li><Link to="/webpack">Webpack</Link></li>
              <li><Link to="/redux">Redux</Link></li>
              <li><Link to="/babel">Babel</Link></li>
              <li><Link to="/about">关于我们</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
