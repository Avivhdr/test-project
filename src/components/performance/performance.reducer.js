import * as constants from './performance.constants';

const initialState = {
  stateString: 'this is a string',
  stateBoolean: false,
  stateNumber: 0,
  stateArray: ['i am a string in an array'],
  stateObject: {
    stateObjectString: 'i am a string in an object'
  },
  stateArrayOfObjects: [
    {
      id: 1,
      key: 'this is a first key',
      value: 'this is a first value'
    }, {
      id: 2,
      key: 'this is a second key',
      value: 'this is a first value'
    }
  ]
};

export function performanceReducer(state = initialState, action) {

  switch (action.type) {
    case constants.STATE_STRING:
      return Object.assign({}, state, { stateString: action.payload });
    case constants.STATE_BOOLEAN:
      return Object.assign({}, state, {
        stateBoolean: !state.stateBoolean
      });
    case constants.STATE_NUMBER:
      return Object.assign({}, state, {
        stateNumber: state.stateNumber + 1
      });
    case constants.STATE_ARRAY:
      // return Object.assign({}, state, {stateArray:
      // state.stateArray.push(action.payload) });//changes the state
      return Object.assign({}, state, {
        stateArray: [
          ...state.stateArray,
          action.payload
        ]
      });
    case constants.STATE_OBJECT:
      return Object.assign({}, state, {
        stateObject: {
          stateObjectString: action.payload
        }
      });
    case constants.STATE_ARRAY_OF_OBJECTS:
      return Object.assign({}, state, {
        stateArrayOfObjects: state
          .stateArrayOfObjects
          .map((item) => {
            return (item.id !== action.payload.id)
              ? item
              : Object.assign({}, item, { key: action.payload.newObjectKey });
          })
      });

    default:
      return state;
  }
}

