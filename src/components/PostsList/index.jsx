import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30"
      )
      .then((response) => {
        setPosts(response.data?.blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="list-posts">
      {posts.map(
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
            id={id}
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
  );
};

export default PostsList;
