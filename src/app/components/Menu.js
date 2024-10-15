'use client'
import { Nav, Navbar, Container } from "react-bootstrap"
const Menu = () => {
  return (<Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="" className="text-light">{`[Ekosystem]`}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="dashboard" className="text-light">Dashboard</Nav.Link>
          <Nav.Link href="torrents" className="text-light">Torrents</Nav.Link>
          <Nav.Link href="explorer" className="text-light">File Explorer</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
};
export default Menu;
