import { useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import EditForm from "../Modals/EditForm";
import DeleteProduct from "../Modals/DeleteProduct";
import SearchProduct from "../components/SearchProduct";

const StorePage = (props) => {
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([{ id: 5001, name: "Loading" }]);
  const [productId, setProductId] = useState(null);
  const [showModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [update, setUpdate] = useState(1);

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <div className="m-2 container-flui">
        <div className="justify-between m-2 d-flex">
          <Filter
            categoryId={categoryId}
            categories={categories}
            setCategories={setCategories}
            setCategoryId={setCategoryId}
            setPageNumber={setPageNumber}
          ></Filter>
          <SearchProduct
            setShowDeleteModal={setShowDeleteModal}
            setProductId={setProductId}
            setShowEditModal={setShowEditModal}
            update={update}
          />
        </div>
      </div>
      <Products
        categoryId={categoryId}
        setProductId={setProductId}
        setShowEditModal={setShowEditModal}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setShowDeleteModal={setShowDeleteModal}
        update={update}
      ></Products>
      <EditForm
        showModal={showModal}
        setShowEditModal={setShowEditModal}
        id={productId}
        setUpdate={setUpdate}
      />
      <DeleteProduct
        id={productId}
        setUpdate={setUpdate}
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
      />
    </div>
  );
};

export default StorePage;
