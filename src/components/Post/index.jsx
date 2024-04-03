import { getDateMonthYearDate, newDate } from "../../utils/date";
import PfotoNull from "../../assets/img/PhotoNull.svg";
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
      {photoUrl === null ? (
        <img className="post-photo" src={PfotoNull} alt="postPhoto" />
      ) : (
        <img className="post-photo" src={photoUrl} alt="postPhoto" />
      )}
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <p className="content-text">{contentText}</p>
      <div className="wrap-date">
        <p className="category">{category}</p>
        {createdAt ? (
          <p className="date">{getDateMonthYearDate(createdAt)}</p>
        ) : (
          <p className="date">{getDateMonthYearDate(newDate(new Date()))}</p>
        )}
      </div>
    </li>
  );
};

export default Post;
