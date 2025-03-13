import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">REMJ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#knowledge">Knowledge</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
