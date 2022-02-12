import React, { Component, PureComponent } from 'react';
import Header from './header';
import "bootstrap/dist/css/bootstrap.css";


class TodaysCoin extends PureComponent {
  render() {
    return(
          <div class="container">
            <Header />
            <div>
              본문
            </div>
          </div>
    );
  }
}

export default TodaysCoin;
