import { useState, useEffect } from "react";

const SearchCategory = ({ setCategories }) => {
  const [search, setSearch] = useState();
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
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Category"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchCategory;
