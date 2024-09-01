'use client'
import { Nav, Navbar, Container } from "react-bootstrap"
const Menu = () => {
  return (<Navbar expand="lg" className="bg-white">
    <Container>
      <Navbar.Brand href="">Ekosystem</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
          <Nav.Link href="torrents">Torrents</Nav.Link>
          <Nav.Link href="explorer">File Explorer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
};
export default Menu;
