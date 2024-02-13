import { getDateMonthYearDate } from "../../utils/date";
import "./styles.scss";

const Post = ({
  id,
  title,
  category,
  contentText,
  createdAt,
  description,
  photoUrl,
}) => {
  return (
    <li key={id} className="list-item">
      <img className="post-photo" src={photoUrl} alt="postPhoto" />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p className="content-text">{contentText}</p>
      <div className="wrap-date">
        <p className="category">{category}</p>
        <p className="date">{getDateMonthYearDate(createdAt)}</p>
      </div>
    </li>
  );
};

export default Post;
