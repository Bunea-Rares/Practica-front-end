import axios from "axios";
import ShowSearchCategory from "../components/ShowSearchCategory";
import SearchCategory from "../components/SearchCategory";
import { useState } from "react";

const AddProduct = () => {
  const [parent, setParent] = useState("");
  const [categories, setCategories] = useState();
  const [response, setResponse] = useState();
  const [errors, setErrors] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    for (var [key, value] of formData.entries()) {
      data[key] = value;
    }
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://localhost:80/api/product", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          setResponse(data.statusText);
          setErrors(null);
        })
        .catch((naspa) => {
          setErrors(naspa.response.data.errors);
          setResponse(null);
        });
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="category_id">Category Id</label>
          <input
            type="text"
            defaultValue={parent}
            className="form-control"
            name="category_id"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea rows="3" name="description" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="text" name="quantity" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input type="text" name="status" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" name="price" className="form-control" />
        </div>
        <button className="btn">Submit</button>
        {response ? <p>{response}</p> : null}
        {errors
          ? Object.keys(errors).map((key) => <p key={key}>{errors[key]}</p>)
          : null}
      </form>
      <SearchCategory setCategories={setCategories} />
      <ShowSearchCategory categories={categories} setParent={setParent} />
    </div>
  );
};

export default AddProduct;
