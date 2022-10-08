import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Footer = () => {

  const [date, setDate] = useState(0);

  useEffect(() => {
    setDate(new Date().getFullYear())
  }, [])
  

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Nav className="m-auto">
          <Navbar.Text className="text-white">
            © {date} Copyrights: MgntTool
          </Navbar.Text>
        </Nav>
      </Navbar>
    </>
  );
};
