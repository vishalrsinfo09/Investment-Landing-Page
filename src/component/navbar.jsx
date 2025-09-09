import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";

function MyNavbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            className="navbar-custom shadow-lg py-3"
            fixed="top"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand
                    href="#"
                    className="fw-bold fs-3 text-dark brand-glow d-flex align-items-center"
                >
                    <img
                        src="Public/Icon.png"
                        alt="App Icon"
                        width="200"
                        height="230"
                        className="me-2"
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#about"
                            className="text-dark nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#features"
                            className="text-dark nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link
                            href="#screenshots"
                            className="text-dark nav-link-custom"
                            onClick={() => setExpanded(false)}
                        >
                            Screenshots
                        </Nav.Link>
                        <Button
                            variant="light"
                            className="ms-2 btn-glow d-flex align-items-center justify-content-center fw-bold"
                            onClick={() => setExpanded(false)}
                        >
                            <Download size={16} className="me-1" />
                            Download
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default MyNavbar;