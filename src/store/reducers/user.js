import { UPDATE_USERNAME } from "../actions/actionTypes";

const initialState = {
  username: "",
  blyat: "",
  second: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default reducer;
