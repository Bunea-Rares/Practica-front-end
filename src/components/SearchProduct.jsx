import axios from "axios";
import { useState, useEffect } from "react";
import SearchModal from "../Modals/SearchModal";
const SearchProduct = ({
  setShowDeleteModal,
  setProductId,
  setShowEditModal,
  update,
}) => {
  const [searchModal, setSearchModal] = useState(false);
  const [search, setSearch] = useState("");
  let [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(update);
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .get("http://localhost:80/api/products?perPage=5&&search=" + search, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProducts(response.data.data.data);
        });
    });
  }, [search, update]);
  return (
    <div className="w-2/3 d-flex-column">
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          className="w-full bg-lime-200 form-control"
          onChange={(e) => {
            setSearchModal(true);
            setSearch(e.target.value);
          }}
          placeholder="Search for a product"
        />
      </div>
      {search !== "" ? (
        <div className="">
          {products?.map((product) => {
            return (
              <SearchModal
                setProductId={setProductId}
                setShowDeleteModal={setShowDeleteModal}
                product={product}
                setShowEditModal={setShowEditModal}
                key={product.id}
                searchModal={searchModal}
                setSearchModal={setSearchModal}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchProduct;
