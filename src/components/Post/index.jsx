import "./styles.scss";

const Post = ({ data }) => {
  const onePost = (
    <ul className="list-posts">
      {data.map(
        ({
          id,
          title,
          category,
          content_text,
          created_at,
          description,
          photo_url,
        }) => (
          <li key={id} className="list-item">
            <img className="post-photo" src={photo_url} alt="postPhoto" />
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <p className="content-text">{content_text}</p>
            <div className="wrap-date">
              <p className="category">{category}</p>
              <p className="date">{`${new Date(created_at).toLocaleString(
                "default",
                { month: "long" }
              )} ${new Date(created_at).getDate()}, ${new Date(
                created_at
              ).getFullYear()}`}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );

  return <>{onePost};</>;
};

export default Post;
