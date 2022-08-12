import { useState, useRef } from "react";
import axios from "axios";
import SearchCategory from "../components/SearchCategory";
import ShowSearchCategory from "../components/ShowSearchCategory";
const ManageCategories = () => {
  const [parent, setParent] = useState();
  const [categories, setCategories] = useState();
  const [name, setName] = useState("");
  const [response, setResponse] = useState();
  const [errors, setErrors] = useState();
  const parentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .post(
          "http://localhost:80/api/category",
          { name, parent_id: parentRef.current.value },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
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
      <form className="w-1/3 mx-auto my-5 text-center" onSubmit={handleSubmit}>
        <div className="m-2 form-group">
          <label htmlFor="name m-2">Name: </label>
          <input
            type="text"
            name="name"
            className="m-2 form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="m-2 form-group">
          <label htmlFor="id">Parent</label>
          <input
            type="text"
            name="id"
            className="m-2 form-control"
            defaultValue={parent}
            ref={parentRef}
          />
        </div>
        <button className="p-2 btn bg-primary">Add</button>
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

export default ManageCategories;
