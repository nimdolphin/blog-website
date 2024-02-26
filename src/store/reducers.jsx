import { combineReducers } from "redux";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_FETCHED":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
