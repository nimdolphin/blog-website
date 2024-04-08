import CategoryTag from "../CategoryTag";
import { TAGS } from "../../data";
import "./styles.scss";

const Filter = ({ categoryState, onClickFilter }) => {
  return (
    <div className="filter">
      <div className="categoryTag">
        {TAGS.map((category) => (
          <CategoryTag
            className="tag"
            key={category}
            dataValue={category}
            onClick={onClickFilter}
            text={category}
            isSelectedTag={categoryState.includes(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
