import { POSTS_PER_PAGE } from "../data";

export const getPaginatedPosts = (currentPage, posts, filteredPosts) => {
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentFilterPost = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return { currentPost, currentFilterPost };
};
