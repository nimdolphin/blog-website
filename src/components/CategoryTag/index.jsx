import "./styles.scss";

const CategoryTag = ({ text, onClick, isSelectedTag, dataValue }) => {
  return (
    <div
      className="tag"
      role="button"
      data-value={dataValue}
      onClick={onClick}
      style={{ borderColor: `${isSelectedTag ? "#4b6bfb" : "#dcdddf"}` }}
    >
      {text}
    </div>
  );
};

export default CategoryTag;
