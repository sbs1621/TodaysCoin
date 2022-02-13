import React, { Component, PureComponent } from 'react';
import { Header, Button } from 'grommet';


class Header extends PureComponent {

    render() {
        return (
            <Header background="brand">
                <Button icon={<Icons.Home />} hoverIndicator />
                <Menu label="account" items={[{ label: 'logout' }]} />
            </Header>
        );
    }
}

export default Header;