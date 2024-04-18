import Button from "../Button";
import "./styles.scss";

const Pagination = ({
  postPerPage,
  currentPage,
  totalPosts,
  handlePagination,
}) => {
  const pageNumbers = Math.ceil(totalPosts / postPerPage);

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
