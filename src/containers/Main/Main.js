'use strict';

import React, { Component } from 'react';
import { Header } from '../../components';

import './Main.less';

export default class Main extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container main">
          {this.props.children}
        </div>
      </div>
    )
  }
}
