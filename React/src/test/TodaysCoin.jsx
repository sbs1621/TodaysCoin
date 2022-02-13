import React, { Component, PureComponent } from 'react';
//import Header from './header';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading } from 'grommet';

class TodaysCoin extends PureComponent {
  render() {
    return (
      <Grommet full>
        <Header background="active" pad="medium">
          Todays Coin
        </Header>
      </Grommet>
    );
  }
}

export default TodaysCoin;
