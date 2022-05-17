import { Button } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import "./tabs.css";
const Tabs = () => {
  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        <Button variant="primary" className="newProductBtn">
          New Prodducts
        </Button>
      </Nav>
    </div>
  );
};

export default Tabs;
