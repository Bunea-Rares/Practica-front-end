const ShowSearchCategory = ({ setParent, categories }) => {
  return (
    <>
      {categories ? (
        <div className="d-flex flex-column">
          {categories?.map((category) => {
            return (
              <div
                className="btn"
                key={category.id}
                id={category.id}
                onClick={(e) => {
                  setParent(e.target.id);
                }}
              >
                {category.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default ShowSearchCategory;
