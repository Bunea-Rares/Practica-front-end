const PaginationProducts = ({ setPageNumber, pageNumber, hasMorePages }) => {
  return (
    <>
      {pageNumber === 1 ? (
        <div className="flex-row justify-around p-2 d-flex">
          <div>
            <button className="border btn border-primary">1</button>
          </div>
          {hasMorePages && (
            <div
              className="border btn border-dark"
              onClick={() => setPageNumber((prev) => prev + 1)}
            >
              2
            </div>
          )}
        </div>
      ) : (
        <div className="flex-row justify-around p-2 d-flex">
          <div>
            <button
              className="border btn border-dark"
              onClick={() => setPageNumber((prev) => prev - 1)}
            >
              {pageNumber - 1}
            </button>
          </div>
          <div>
            <button className="border btn border-primary">{pageNumber}</button>
          </div>
          {hasMorePages && (
            <div
              className="border btn border-dark"
              onClick={() => setPageNumber((prev) => prev + 1)}
            >
              {pageNumber + 1}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PaginationProducts;
