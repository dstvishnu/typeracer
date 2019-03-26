import {
    SEARCH_ERROR,
    NETWORK_ERROR,
    SERVER_ERROR
  } from '../Constants/TypeConstants';
  
  export const changeSearchError = isError => dispatch => {
    dispatch({
      type: SEARCH_ERROR,
      payload: isError
    });
  };
  
  export const changeNetworkError = isError => dispatch => {
    dispatch({
      type: NETWORK_ERROR,
      payload: isError
    });
  };
  
  export const changeServerError = isError => dispatch => {
    dispatch({
      type: SERVER_ERROR,
      payload: isError
    });
  };
  