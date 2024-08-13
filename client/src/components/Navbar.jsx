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

    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/Strive-Logo.jpg" alt="Logo" className="logo" />
        </Link>
        <button className="navbar-toggle" aria-controls="basic-navbar-nav">
          ☰
        </button>
        <div className="navbar-collapse" id="basic-navbar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/landing" className="nav-link">Landing</Link>
            </li>
            <li className="nav-item">
              <Link to="/taskboard" className="nav-link">TaskBoard</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
