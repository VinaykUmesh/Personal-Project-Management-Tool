import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export class AddProject extends Component {
  state = {
    projectName: "",
    projectIdentifier: "",
    description: "",
    startDate: "",
    endDate: "",
  };
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <Container fluid="sm">
          <Form onSubmit={this.onSubmit}>
            <Form.Label className="font-weight-bold text-uppercase text-center w-100">
              Add New Project
            </Form.Label>
            <Form.Group className="mb-3" controlId="projectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="projectName"
                placeholder="Enter project name"
                name="projectName"
                value={this.state.projectName}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="projectIdentifier">
              <Form.Label>Project Identifier</Form.Label>
              <Form.Control
                type="projectIdentifier"
                placeholder="Enter project identifier"
                name="projectIdentifier"
                value={this.state.projectIdentifier}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="description"
                placeholder="description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" onChange={this.onChange} 
                              value={this.state.startDate}
                              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" onChange={this.onChange} 
                              value={this.state.endDate}
                              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
