import { ADD_GUEST } from "../constants/action-types";
import { REMOVE_GUEST } from "../constants/action-types";

export function addGuest(payload) {
  return { type: ADD_GUEST, payload };
}
