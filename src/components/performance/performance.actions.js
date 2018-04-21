import * as constants from './performance.constants';

export function changeStateString(newString) {
  return { type: constants.STATE_STRING, payload: newString };
}

export function toggleStateBoolean() {
  return { type: constants.STATE_BOOLEAN };
}

export function incrementStateNumber() {
  return { type: constants.STATE_NUMBER };
}

export function pushItemToStateArray(newItem) {
  return { type: constants.STATE_ARRAY, payload: newItem };
}

export function editStringInStateObject(newString) {
  return { type: constants.STATE_OBJECT, payload: newString };
}

export function editStringInStateArrayOfObjects(newObjectKey) {
  return { type: constants.STATE_ARRAY_OF_OBJECTS, payload: { id: 1, key: newObjectKey } };
}