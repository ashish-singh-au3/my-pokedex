import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"; // using axios to post the data
import "../App.css";
import Footer from "./Footer";
//import Background from "../new1.png";

export default class newPoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      attack_level: "",
      defense_level: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(" http://localhost:4000/newPokemon", this.state)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { name, type, attack_level, defense_level, description } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper col-md-3 offset-md-4">
          <h2> Found a New Pokemon?...</h2>
          <Form onSubmit={this.submitHandler}>
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                id="name"
                name="name"
                as="textarea"
                rows="1"
                value={name}
                onChange={this.changeHandler}
                placeholder="Enter name of Pokemon..."
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="type">Type</Form.Label>
              <Form.Control
                id="type"
                name="type"
                as="textarea"
                rows="1"
                value={type}
                onChange={this.changeHandler}
                placeholder="Enter Type of Pokemon..."
                isrequired
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="attack_level">Attack</Form.Label>
              <Form.Control
                id="attack_level"
                name="attack_level"
                as="textarea"
                rows="1"
                value={attack_level}
                onChange={this.changeHandler}
                placeholder="Enter attack-level..."
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="defense_level">Defense</Form.Label>
              <Form.Control
                id="defense_level"
                name="defense_level"
                as="textarea"
                rows="1"
                value={defense_level}
                onChange={this.changeHandler}
                placeholder="Enter defense-level..."
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                id="description"
                name="description"
                as="textarea"
                rows="3"
                value={description}
                onChange={this.changeHandler}
                placeholder="Please drop the description here..."
              />
            </Form.Group>

            <Button className="d-inline-block" variant="dark" type="submit">
              Submit
            </Button>

            <Button variant="dark" className="col-md-3 offset-md-4" href="/">
              Home
            </Button>
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}
