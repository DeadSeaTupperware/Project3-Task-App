import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../utils/auth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  const handleLogout = () => {
    Auth.logout();
    setIsLoggedIn(false);
  };

  return (
    <>
      <Menu inverted borderless fixed="top" className="custom-navbar">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src={"/Strive-Logo.png"} alt="Logo" className="logo" />
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/TaskBoard">
            Calendar
          </Menu.Item>
          <Menu.Item as={Link} to="/UserPage">
            Task Board
          </Menu.Item>
          <Menu.Menu position="right">
            {isLoggedIn ? (
              <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
            ) : (
              <>
                <Menu.Item as={Link} to="/Login">
                  Login
                </Menu.Item>
                <Menu.Item as={Link} to="/Landing">
                  Sign Up
                </Menu.Item>
              </>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
      <nav className="navbar">
        <div className="navbar-container"></div>
      </nav>
    </>
  );
};

export default Navbar;
