import { useDispatch } from "react-redux";
import { removePost } from "../../store/actions";
import { getDateMonthYearDate, newDate } from "../../utils/date";
import PhotoNull from "../../assets/img/PhotoNull.svg";
import Button from "../Button";
import "./styles.scss";

const Post = ({
  id,
  title,
  category,
  contentText,
  createdAt,
  description,
  photoUrl,
  onClick,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item" onClick={onClick}>
      <Button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(removePost(id));
        }}
        label="&#10006;"
        type="button"
        width={20}
      />

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
