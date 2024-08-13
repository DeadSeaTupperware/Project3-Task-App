import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu inverted borderless fixed="top" className="custom-navbar">
      <Container>
        <Menu.Item header as={Link} to="/">
        <img src={"/Strive-Logo.png"} alt="Logo" className="logo" />
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/TaskBoard">
          Task Board
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/Login">
            Login
          </Menu.Item>
          <Menu.Item as={Link} to="/Landing">
            Sign Up
          </Menu.Item>
          <Menu.Item header as={Link} to="/">
          <img src={"/Strive-Logo.png"} alt="Logo" className="logo" />
        </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
