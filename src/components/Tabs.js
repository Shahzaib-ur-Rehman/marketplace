import { Button } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import "./tabs.css";
import { Link } from "react-router-dom";
const Tabs = () => {
  return (
    <Nav variant="pills" className="tabs">
      <Nav.Item>
        <Link to="/Bot1" className="navLink">
          Bot1
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Bot2" className="navLink">
          Bot2
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Bot3" className="navLink">
          Bot3
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Bot4" className="navLink">
          Bot4
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Bot5" className="navLink">
          Bot5
        </Link>
      </Nav.Item>
      <Link to="/addNewProduct" className="newProductBtn">
        <Button variant="primary" className="">
          New Products
        </Button>
      </Link>
    </Nav>
  );
};

export default Tabs;
