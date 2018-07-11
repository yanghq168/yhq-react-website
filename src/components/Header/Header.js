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
            <a className="navbar-brand brand-name" href="#">杨洪权xx公司</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">首页</a></li>
              <li><Link to="/react">展示页1</Link></li>
              <li><Link to="/es6">展示页2</Link></li>
              <li><Link to="/webpack">展示页3</Link></li>
              <li><Link to="/redux">展示页4</Link></li>
              <li><Link to="/babel">展示页5</Link></li>
              <li><Link to="/about">关于我们</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
