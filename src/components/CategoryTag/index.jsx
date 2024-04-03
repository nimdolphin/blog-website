import "./styles.scss";

const CategoryTag = ({
  text,
  onClick,
  borderColor = "#dcdddf",
  selectedBorderColor = "#4b6bfb",
  dataValue,
  tag,
}) => {
  const actualBorderColor =
    tag === dataValue ? selectedBorderColor : borderColor;
  return (
    <div
      className="tag"
      role="button"
      data-value={dataValue}
      onClick={onClick}
      style={{ borderColor: `${actualBorderColor}` }}
    >
      {text} {tag === dataValue}
    </div>
  );
};

export default CategoryTag;
