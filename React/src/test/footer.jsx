import React, { Component, PureComponent } from 'react';
import { Anchor, Clock, Footer, Grommet, Main, Text, Box, Avatar, Button, Header, Menu, Heading } from 'grommet';

class Mainfooter extends PureComponent {

    render() {
        return (
            <Footer background="active" pad="medium">
                <Text>Copyright</Text>
                <Clock type="digital" />
                <Anchor label="About" />
            </Footer>
        );
    }
}

export default Mainfooter;