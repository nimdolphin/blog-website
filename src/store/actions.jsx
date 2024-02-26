export const postsFetched = (posts) => {
  return {
    type: "SET_POSTS",
    payload: posts,
  };
};
