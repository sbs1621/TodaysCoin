import React, { Component, PureComponent } from 'react';
import { Anchor, Clock, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading, } from 'grommet';
//import { Grommet as GrommetIcon } from 'grommet-icons';

class Mainfooter extends PureComponent {

    render() {
        return (
            <Footer background="light-4" pad="small" Align="center">
                <Text textAlign="center" size="xsmall">
                    ©Copyright
                </Text>
            </Footer>
        );
    }
}

export default Mainfooter;