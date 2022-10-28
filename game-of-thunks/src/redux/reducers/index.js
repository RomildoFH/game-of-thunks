import { GET_CHARACTER, REQUEST_CHARACTER } from "../actions";

const INITIAL_STATE = {
  name: '',
  gender: '',
  born: '',
  died: '',
  isFetching: false,
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) { 
    case REQUEST_CHARACTER:
      return {
        ...state,
        isFetching: true,
      }
    case GET_CHARACTER:
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        born: action.payload.born,
        died: action.payload.died,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default characterReducer;