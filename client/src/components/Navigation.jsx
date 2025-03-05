import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse the navbar after clicking a link
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>About Me</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" onClick={handleNavLinkClick}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={handleNavLinkClick}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
