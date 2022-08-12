import Categories from "./Categories";
import { useState } from "react";
const Filter = ({
  setCategories,
  categories,
  setCategoryId,
  setPageNumber,
  categoryId,
}) => {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    setPageNumber(1);
    setCategoryId(e.target.id);
  };
  return (
    <div className="w-1/3">
      <form>
        <div>
          <Categories
            setCategoryId={setCategoryId}
            categoryId={categoryId}
            setCategories={setCategories}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </form>
      {search ? (
        <div className="d-flex flex-column">
          {categories?.map((category) => {
            return (
              <div
                className="btn"
                key={category.id}
                id={category.id}
                onClick={handleClick}
              >
                {category.name}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
