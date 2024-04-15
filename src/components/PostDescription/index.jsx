import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { getDateMonthYearDate } from "../../utils/date";
import "./styles.scss";

const PostDescription = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    axios
      .get(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then((response) => setPost(response.data.blog))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="post-description">
          <h1 className="post-description-title">{post.title}</h1>
          <div className="wrapper-category-date">
            <p className="post-description-category">{post.category}</p>
            <p className="post-description-date">
              {getDateMonthYearDate(post.created_at)}
            </p>
          </div>
          <p className="post-description-subtitle">{post.description}</p>
          <img
            className="post-description-photo"
            src={post.photo_url}
            alt="post"
          />
          <p className="post-description-article">{post.content_text}</p>
        </div>
      )}
    </>
  );
};

export default PostDescription;
