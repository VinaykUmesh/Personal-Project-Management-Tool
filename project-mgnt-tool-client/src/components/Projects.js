import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <>
    <div className='d-flex d-flex justify-content-end'>
    <Button variant="primary" className="m-1" href="/addProject">New</Button>
    </div>
    <div className="d-flex flex-column">
      <Card className="m-2" style={{margin: '5px'}}>
      <Card.Body className='d-flex'>
      <div className="m-2 w-100">
      <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </div>
      <div className="p-2 flex-shrink-1">
        <div className='d-flex flex-column'>
        <Button variant="primary" className="m-1">Edit</Button>
        <Button variant="primary" className="m-1">Delete</Button>
        </div>
      </div>
      </Card.Body>
      </Card>
      <Card className="p-2" style={{margin: '5px'}}>
      <Card.Body className='d-flex'>
      <div className="p-2 w-100">
      <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </div>
      <div className="p-2 flex-shrink-1">
        <div className='d-flex flex-column'>
        <Button variant="primary" className="m-1">Edit</Button>
        <Button variant="primary" className="m-1">Delete</Button>
        </div>
      </div>
      </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Projects