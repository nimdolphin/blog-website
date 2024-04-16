import Button from "../Button";
import "./styles.scss";

const Pagination = ({
  postPerPage,
  currentPage,
  totalPosts,
  handlePagination,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <Button
          backgroundColor={currentPage === pageNumber ? "#696a75" : "#4b6bfb"}
          key={pageNumber}
          label={pageNumber}
          width={25}
          type="button"
          onClick={() => handlePagination(pageNumber)}
        />
      ))}
    </div>
  );
};

export default Pagination;
