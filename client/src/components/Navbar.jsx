import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu inverted borderless fixed="top">
      <Container>
        <Menu.Item header>
        <img src={"/Strive-Logo.png"} alt="Logo" className="logo" />
        </Menu.Item>
        <Menu.Item name="home" />
        <Menu.Item name="Task Board" />
        <Menu.Menu position="right">
          <Menu.Item name="login" />
          <Menu.Item name="signup" />
        </Menu.Menu>
        <Menu.Item header>
        <img src={"/Strive-Logo.png"} alt="Logo" className="logo" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
