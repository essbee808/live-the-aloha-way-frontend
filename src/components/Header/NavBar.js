import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Live The Aloha Way</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">Our Story</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#blog">Share Aloha</Nav.Link>
            <Nav.Link href="#Contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;