import React, { Component } from 'react';
import Guest from './Guest';
import EditGuest from './EditGuest';
import { connect } from 'react-redux';
import {Table, TableBody, TableRow, Typography} from '@material-ui/core';

class AllGuests extends Component {
    render() {
        return (
            <div>
                <Typography component="h2" variant="display2" gutterBottom align="left">
                    All Guests
                </Typography>
                <Table>
                  <TableBody>
                    {this.props.guests.map((guest) => (
                        <TableRow>
                            {guest.editing ? <EditGuest guest={guest} key={guest.id} /> : <Guest key={guest.id} guest={guest} />}
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        guests: state.guests
    }
}
export default connect(mapStateToProps)(AllGuests);
