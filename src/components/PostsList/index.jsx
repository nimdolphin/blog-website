import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsFetched } from "../../store/actions";
import Filter from "../Filter";
import axios from "axios";
import Post from "../Post";
import Loader from "../Loader";

const PostsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryState, setCategory] = useState([]);

  const onClickFilter = (event) => {
    const value = event.target.getAttribute("data-value");
    if (categoryState.includes(value)) {
      setCategory(categoryState.filter((tag) => tag !== value));
    } else {
      setCategory([...categoryState, value]);
    }
  };

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
      )
      .then((response) => dispatch(postsFetched(response.data.blogs)))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredPosts = posts?.filter(
    (post) =>
      categoryState.length === 0 || categoryState.includes(post.category)
  );

  return (
    <>
      <Filter onClickFilter={onClickFilter} categoryState={categoryState} />

      <ul className="list-posts">
        {isLoading && <Loader />}
        {!isLoading && !filteredPosts?.length && <p>No posts found</p>}
        {!isLoading &&
          filteredPosts?.map(
            (
              {
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
              />
            )
          )}
      </ul>
    </>
  );
};

export default PostsList;
