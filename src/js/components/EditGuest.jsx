import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import {Button} from '@material-ui/core';
class EditGuest extends Component {


handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newEmail = this.getEmail.value;
  const newComment = this.getComment.value;
  const data = {
    newName,
    newEmail,
    newComment
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.guest.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.guest.name}/>
    <input required type="email" ref={(input) => this.getEmail = input}
    defaultValue={this.props.guest.email}/>
    <input required type="text" ref={(input) => this.getComment = input}
    defaultValue={this.props.guest.comment}/>
    <Button variant="contained" color="secondary">Update</Button>
  </form>
</div>
);
}
}
export default connect()(EditGuest);
