export const getPaginatedPosts = (
  currentPage,
  postsPerPage,
  posts,
  filteredPosts
) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentFilterPost = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return { currentPost, currentFilterPost };
};
