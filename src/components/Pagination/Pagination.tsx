import "./Pagination.css";

const Pagination = ({
  currentPage,
  paginationButtons,
  handlePaginationClick
}: any) => {
  return (
    <div className="Pagination">
      {paginationButtons().map((button: number) => (
        <button
          className={`Pagination-button ${currentPage === button && "Active"}`}
          onClick={handlePaginationClick}
          key={button}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
