import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsFetched } from "../../store/actions";
import axios from "axios";
import Post from "../Post";
import Loader from "../Loader";

const PostsList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
      )
      .then(
        (response) => dispatch(postsFetched(response.data.blogs)),
        setIsLoading(false)
      )
      .catch((error) => console.log(error), setIsLoading(false));
  }, []);

  return (
    <ul className="list-posts">
      {isLoading || !posts.length ? (
        <p>
          <Loader />
        </p>
      ) : (
        posts?.map(
          ({
            id,
            title,
            category,
            content_text,
            created_at,
            description,
            photo_url,
          }) => (
            <Post
              key={id}
              title={title}
              category={category}
              contentText={content_text}
              createdAt={created_at}
              description={description}
              photoUrl={photo_url}
            />
          )
        )
      )}
    </ul>
  );
};

export default PostsList;
