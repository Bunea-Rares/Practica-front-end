import { useState, useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import PaginationProducts from "../Pagination/PaginationProducts";

const Products = ({
  categoryId,
  setProductId,
  setShowEditModal,
  pageNumber,
  setPageNumber,
  update,
  setShowDeleteModal,
}) => {
  const [products, setProducts] = useState([
    {
      name: "loading",
      description: "loading",
      id: 23,
      parentId: 25,
      quanity: 5,
      status: 0,
    },
  ]);
  const [hasMorePages, setHasMorePages] = useState(false);

  useEffect(() => {
    console.log(update);
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    const getProducts = async () => {
      fetch(
        "http://localhost:80/api/products?category=" +
          categoryId +
          "&pageNumber=" +
          pageNumber,
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.data.data);
          setHasMorePages(data.data.hasMorePages);
        });
    };
    getProducts();
  }, [categoryId, pageNumber, update]);

  return (
    <div className="">
      <div className="cotainer-fluid">
        <div className="row">
          {products?.map((product) => {
            return (
              <ProductCard
                setProductId={setProductId}
                key={product.id}
                product={product}
                setShowEditModal={setShowEditModal}
                setShowDeleteModal={setShowDeleteModal}
              />
            );
          })}
        </div>
        <PaginationProducts
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          hasMorePages={hasMorePages}
        />
      </div>
    </div>
  );
};

export default Products;
