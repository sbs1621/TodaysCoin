import React, { Component, PureComponent } from 'react';
import { Anchor, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading } from 'grommet';
import { User } from 'grommet-icons';
class MainHeader extends PureComponent {

    render() {
        return (
            <Header background="active" pad="medium">
                <Text>Todays Coin</Text>
                <Button plain icon={<User />} onClick={() => { }} />
            </Header>
        );
    }
}

export default MainHeader;
