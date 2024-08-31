'use client'
import { Nav, Navbar, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Ekosystem</Navbar.Brand>
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
}
