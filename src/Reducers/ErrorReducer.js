import {
  SEARCH_ERROR,
  NETWORK_ERROR,
  SERVER_ERROR
} from '../Constants/TypeConstants';

const initialState = {
  searchError: false,
  networkError: false,
  serverError: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action.payload
      };
    case NETWORK_ERROR:
      return {
        ...state,
        networkError: action.payload
      };
    case SERVER_ERROR:
      return {
        ...state,
        serverError: action.payload
      };
    default:
      return state;
  }
}
