const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "DELETE_POST":
      const itemId = action.payload;
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== itemId),
      };
    default:
      return state;
  }
};
