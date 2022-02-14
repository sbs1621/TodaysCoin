import React, { Component, PureComponent } from 'react';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading, Image, Body, InfiniteScroll } from 'grommet';
import MainHeader from './header';
import MainBody from './body';
import Mainfooter from './footer';

const allItems = Array(20)
  .fill()
  .map((_, i) => 'item${i+1}');

class TodaysCoin extends PureComponent {
  render() {
    return (
      <Grommet full>
        <Main background="url('background.jpeg')">
          <MainHeader />
          <MainBody />
          <Box>
            <InfiniteScroll items={allItems}{...this.props}>
              {item => (
                <Box
                  key={item}
                  pad="medium"
                  border={{ side: 'bottom' }}
                  align="center"
                >
                  <Text>(item)</Text>
                </Box>
              )}
            </InfiniteScroll>
          </Box>
        </Main>
        <Mainfooter />
      </Grommet>

    );
  }
}







export default TodaysCoin;
