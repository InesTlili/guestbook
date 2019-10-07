import { ADD_GUEST } from "../constants/action-types";
import { DELETE_GUEST } from "../constants/action-types";
import { EDIT_GUEST } from "../constants/action-types";
import { UPDATE } from "../constants/action-types";

const initialState = {
  guests: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {
          guests: state.guests.concat(action.payload)
        });

    case DELETE_GUEST:
      return Object.assign({}, state, {
          guests: state.guests.filter((guest)=>guest.id !== action.id)
        });

    case EDIT_GUEST:
      return Object.assign({}, state, {
          guests: state.guests.map((guest)=>guest.id === action.id ? {...guest,editing:!guest.editing}:guest)
        });

    case UPDATE:
      return Object.assign({}, state, {
          guests: state.guests.map((guest)=>{
              if(guest.id === action.id) {
                return {
                   ...guest,
                   name:action.data.newName,
                   email:action.data.newEmail,
                   comment:action.data.newComment,
                   editing: !guest.editing
                }
              } else return guest;
            })
        });
    default:
          return state;
    }
};
export default rootReducer;
