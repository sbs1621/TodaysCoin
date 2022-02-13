import React, { Component, PureComponent } from 'react';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading } from 'grommet';

class MainHeader extends PureComponent {

    render() {
        return (
            <Header background="active" pad="medium">
                Todays Coin
            </Header>
        );
    }
}

export default MainHeader;
