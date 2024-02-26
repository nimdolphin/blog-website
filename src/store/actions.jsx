export const postsFetched = (posts) => {
  return {
    type: "POSTS_FETCHED",
    payload: posts,
  };
};
