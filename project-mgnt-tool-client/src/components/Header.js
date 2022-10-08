import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate  = useNavigate();
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (window.location.pathname.includes("/overview"))
      setLocation({ overview: true });
    if (window.location.pathname.includes("/projects"))
      setLocation({ projects: true });
  }, []);


  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand onClick={() => navigate("/overview")}>MgntTool</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/overview")} active={location.overview}>
              Overview
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/projects")} active={location.projects}>
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
