import { getDateMonthYearDate, newDate } from "../../utils/date";
import PhotoNull from "../../assets/img/PhotoNull.svg";
import "./styles.scss";

const Post = ({
  title,
  category,
  contentText,
  createdAt,
  description,
  photoUrl,
}) => {
  return (
    <li className="list-item">
      <img className="post-photo" src={photoUrl ?? PhotoNull} alt="postPhoto" />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p className="content-text">{contentText}</p>
      <div className="wrap-date">
        <p className="category">{category}</p>
        <p className="date">
          {getDateMonthYearDate(createdAt ? createdAt : newDate(new Date()))}
        </p>
      </div>
    </li>
  );
};

export default Post;
