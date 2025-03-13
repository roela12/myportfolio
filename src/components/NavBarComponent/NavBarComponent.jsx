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
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre mi</Nav.Link>
            <Nav.Link href="#knowledge">Conocimientos</Nav.Link>
            <Nav.Link href="#experience">Experiencia</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
