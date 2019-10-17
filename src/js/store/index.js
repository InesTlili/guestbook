


import { createStore } from "redux";
import rootReducer from "../reducers/index";

// load function for the state
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};


//to persist the state we save it in a file
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(err) {
    console.log(err);
  }
};
const persistedStore = loadState();
const store = createStore(rootReducer, persistedStore);
store.subscribe(() => {
    saveState(store.getState());
  });
export default store;
