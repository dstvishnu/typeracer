import axios from 'axios';
import {
  GET_RANDOM_TEXT,
  SEARCH_ERROR,
  NETWORK_ERROR,
  SERVER_ERROR
} from '../Constants/TypeConstants';
export const getRandomText = (
  query,
) => async dispatch => {
  const res = await getResponse(
    query,
    'http://www.randomtext.me/api/',
  );
  if (res.type === 'success') {
    dispatch({
      type: GET_RANDOM_TEXT,
      payload: res.data
    });
  } else {
    dispatch({
      type: res,
      payload: true
    });
  }
};

const getResponse = async (query, url) => {
  try {    
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const res = await axios.get(url);
    return {
      type: 'success',
      data: res.data
    };
  } catch (err) {
    return handleError(err);
  }
};

const handleError = err => {
  if (err.response) {
    if (err.response.status === 404) {
      return SEARCH_ERROR;
    } else if (err.response.status === 500) {
      return SERVER_ERROR;
    }
  } else {
    return NETWORK_ERROR;
  }
};