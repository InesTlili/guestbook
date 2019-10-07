// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addGuest } from "../actions/index";
import {Button, Input, InputLabel, Typography} from '@material-ui/core';

function mapDispatchToProps(dispatch) {
  return {
    addGuest: guest => dispatch(addGuest(guest))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, comment } = this.state;
    const id = uuidv1();
    const editing = false;
    this.props.addGuest({ name, email, comment, id, editing });
    this.setState({ name: "", email: "", comment: "" });
  }

  render() {
    const { name, email, comment, editing } = this.state;
    return (
      <div>
      <Typography component="h2" variant="display2" gutterBottom align="left">
          Add a Guest
      </Typography>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group" style={{marginBottom: 0.8 + 'em'}}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group" style={{marginBottom: 0.8 + 'em'}}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group" style={{marginBottom: 1 + 'em'}} >
          <InputLabel htmlFor="comment">Comment</InputLabel>
          <Input
            type="textarea"
            className="form-control"
            id="comment"
            value={comment}
            onChange={this.handleChange}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          SAVE
        </Button>
      </form>
      </div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
