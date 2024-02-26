import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsFetched } from "../../store/actions";
import axios from "axios";
import Post from "../Post";

const PostsList = () => {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
      )
      .then((response) => dispatch(postsFetched(response.data?.blogs)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="list-posts">
      {!posts || !posts.length ? (
        <p>There are no posts</p>
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
