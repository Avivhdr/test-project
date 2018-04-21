import { ADD_LOCATION } from './constants';

export function addLocation(location) {
  return { type: ADD_LOCATION, location };
}
