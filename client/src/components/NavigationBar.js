import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <Navbar className="navbar navbar-light bg-warning justify-content-center">
      <Navbar.Brand className="text-white" href="#home">
        Taxi Information System
      </Navbar.Brand>
    </Navbar>
  );
};
export { NavigationBar };