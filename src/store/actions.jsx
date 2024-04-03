export const postsFetched = (posts) => {
  return {
    type: "SET_POSTS",
    payload: posts,
  };
};

export const addPost = (newPost) => {
  return {
    type: "ADD_POST",
    payload: newPost,
  };
};
