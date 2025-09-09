import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";

function MyNavbar() {
    const [expanded, setExpanded] = useState(false);

    const handleNavClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar
            expand="lg"
            className="navbar-custom shadow-lg py-2 py-lg-3"
            fixed="top"
            expanded={expanded}
            collapseOnSelect
        >
            <Container fluid className="px-3 px-md-4">
                {/* Brand Section */}
                <Navbar.Brand
                    href="#"
                    className="fw-bold fs-3 fs-md-2 text-dark brand-glow d-flex align-items-center"
                >
                    <img
                        src="/Icon.png"
                        alt="App Icon"
                        className="me-2 navbar-logo"
                        style={{
                            height: "40px",
                            width: "auto",
                            maxHeight: "50px"
                        }}
                    />
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="border-0 shadow-none"
                    style={{ fontSize: '1.2rem' }}
                />

                {/* Collapsible Navigation */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        <Nav.Link
                            href="#about"
                            className="text-dark nav-link-custom px-3 py-2"
                            onClick={handleNavClick}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#features"
                            className="text-dark nav-link-custom px-3 py-2"
                            onClick={handleNavClick}
                        >
                            Features
                        </Nav.Link>
                        <Nav.Link
                            href="#screenshots"
                            className="text-dark nav-link-custom px-3 py-2"
                            onClick={handleNavClick}
                        >
                            Screenshots
                        </Nav.Link>

                        {/* Download Button */}
                        <div className="mt-2 mt-lg-0 ms-lg-3">
                            <Button
                                variant="primary"
                                className="btn-glow d-flex align-items-center justify-content-center fw-bold w-100 w-lg-auto"
                                onClick={handleNavClick}
                                size="sm"
                            >
                                <Download size={16} className="me-2" />
                                Download
                            </Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
