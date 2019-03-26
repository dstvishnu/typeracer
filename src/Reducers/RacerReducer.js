import { GET_RANDOM_TEXT } from '../Constants/TypeConstants';

const initialState = { randomText: "" };

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_TEXT:
      console.log(action.payload);
      return {
        ...state,
        randomText:action.payload['text_out']
      };  
    default:
      return state;
  }
}
