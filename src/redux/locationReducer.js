import * as constants from './constants';

export function locationsReducer(state = [], action) {
  switch (action.type) {
    case(constants.ADD_LOCATION):
      return state.concat([action.location]); // todo: wrong! changes the current state
    default:
      return state;
  }
}