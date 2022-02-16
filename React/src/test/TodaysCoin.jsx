import React, { Component, PureComponent } from 'react';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading, Image, Body, InfiniteScroll } from 'grommet';
import MainHeader from './header';
import MainBody from './body';
import Mainfooter from './footer';


class TodaysCoin extends PureComponent {
  render() {
    return (
      <Grommet full="min">         
       <MainHeader />
        <Main background="#ffffff">
          <MainBody />
        </Main>        
          <Mainfooter />

      </Grommet>

    );
  }
}







export default TodaysCoin;
