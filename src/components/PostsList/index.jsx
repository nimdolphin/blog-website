import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postsFetched } from "../../store/actions";
import { getPaginatedPosts } from "../../utils/data";
import { POSTS_PER_PAGE } from "../../data";
import Filter from "../Filter";
import axios from "axios";
import Post from "../Post";
import Loader from "../Loader";
import Pagination from "../Pagination";

const PostsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const handleNavigation = (id) => () => {
    navigate(`post/${id}`);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const onClickFilter = (event) => {
    const value = event.target.getAttribute("data-value");
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((tag) => tag !== value));
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
    setCurrentPage(1);
  };

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
      )
      .then((response) => dispatch(postsFetched(response.data.blogs)))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = posts?.filter((post) =>
    selectedCategories.includes(post.category)
  );

  const { currentPost, currentFilterPost } = getPaginatedPosts(
    currentPage,
    POSTS_PER_PAGE,
    posts,
    filteredPosts
  );

  return (
    <>
      <Filter
        onClickFilter={onClickFilter}
        selectedCategories={selectedCategories}
      />

      <ul className="list-posts">
        {isLoading && <Loader />}
        {!isLoading && !posts?.length && <p>No posts found</p>}
        {!isLoading &&
          (filteredPosts.length ? currentFilterPost : currentPost)?.map(
            (
              {
                id,
                title,
                category,
                content_text,
                created_at,
                description,
                photo_url,
              },
              idx
            ) => (
              <Post
                key={idx}
                title={title}
                category={category}
                contentText={content_text}
                createdAt={created_at}
                description={description}
                photoUrl={photo_url}
                onClick={handleNavigation(id)}
              />
            )
          )}
      </ul>
      <Pagination
        postPerPage={POSTS_PER_PAGE}
        currentPage={currentPage}
        totalPosts={
          filteredPosts.length > 0 ? filteredPosts.length : posts.length
        }
        handlePagination={handlePagination}
      />
    </>
  );
};

export default PostsList;
