import React, { Component, PureComponent } from 'react';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading } from 'grommet';
import MainHeader from './header';
import MainBody from './body';
import Mainfooter from './footer';

class TodaysCoin extends PureComponent {
  render() {
    return (
      <Grommet full>
        <MainHeader />
        <MainBody />
        <Mainfooter />
      </Grommet>
    );
  }
}







export default TodaysCoin;
