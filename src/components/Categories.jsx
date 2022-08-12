import { useEffect, useRef } from "react";

const Categories = ({
  setCategories,
  search,
  setSearch,
  categoryId,
  setCategoryId,
}) => {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    const getCategories = async () => {
      fetch("http://localhost:80/api/categories?perPage=5&&search=" + search, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.data.data);
        });
    };
    getCategories();
  }, [search, setCategories]);

  const input = useRef();

  return (
    <div>
      <div className="form-group">
        <label htmlFor="category"></label>
        <input
          className="form-control"
          type="text"
          name="category"
          id="category"
          placeholder="Category:"
          ref={input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {categoryId ? (
        <button
          type="button"
          className="w-full btn bg-danger"
          onClick={() => {
            setSearch("");
            setCategoryId("");
            input.current.value = "";
          }}
        >
          {document.getElementById(categoryId)?.innerText}
        </button>
      ) : null}
    </div>
  );
};

export default Categories;
