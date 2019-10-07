import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, TableCell, Fab} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Guest extends Component {
  render() {
  return (
    <div>
    <TableCell align="center">{this.props.guest.name}</TableCell>
    <TableCell align="center">{this.props.guest.email}</TableCell>
    <TableCell align="center">{this.props.guest.comment}</TableCell>
    <TableCell align="center">
        <Fab variant="contained" color="secondary"
        onClick={()=>this.props.dispatch({type:'EDIT_GUEST',id:this.props.guest.id})}>
        <EditIcon /> Edit</Fab>
    </TableCell>
    <TableCell align="center">
        <Fab variant="contained"
        onClick={()=>this.props.dispatch({type:'DELETE_GUEST',id:this.props.guest.id})}>
        <DeleteIcon/> Delete</Fab>
    </TableCell>


    </div>
  );
 }
}
export default connect()(Guest);
