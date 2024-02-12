import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post";

const PostsList = () => {
  const [post, setPosts] = useState([]);

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
    <>
      <Post data={post} />
    </>
  );
};

export default PostsList;
