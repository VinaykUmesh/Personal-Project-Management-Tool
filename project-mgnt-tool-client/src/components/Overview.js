import React from "react";
import { Card } from "react-bootstrap";

const Overview = () => {
  return (
    <div className="d-flex justify-content-evenly">
      <Card className="m-1">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className="m-1">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  );
};

export default Overview;
