import CategoryTag from "../CategoryTag";
import { TAGS } from "../../data";

const Filter = ({ selectedCategories, onClickFilter }) => {
  return (
    <div className="categoryTag">
      {TAGS.map((category) => (
        <CategoryTag
          className="tag"
          key={category}
          dataValue={category}
          onClick={onClickFilter}
          text={category}
          isSelectedTag={selectedCategories.includes(category)}
        />
      ))}
    </div>
  );
};

export default Filter;
