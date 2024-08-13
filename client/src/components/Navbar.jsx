import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/Strive-Logo.jpg" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/landing">Landing</Nav.Link>
            <Nav.Link as={Link} to="/taskboard">TaskBoard</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default BasicExample;