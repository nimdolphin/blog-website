import Button from "../Button";
import { POSTS_PER_PAGE } from "../../data";
import "./styles.scss";

const Pagination = ({ currentPage, totalPosts, handlePagination }) => {
  const pageNumbers = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <div className="pagination">
      {Array.from({ length: pageNumbers }, (_, i) => i + 1).map(
        (pageNumber) => (
          <Button
            className={currentPage === pageNumber ? "active" : ""}
            key={pageNumber}
            label={pageNumber}
            width={25}
            onClick={() => handlePagination(pageNumber)}
          />
        )
      )}
    </div>
  );
};

export default Pagination;
