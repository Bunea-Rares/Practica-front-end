const SearchModal = ({
  setProductId,
  setShowDeleteModal,
  product,
  setShowEditModal,
  searchModal,
  setSearchModal,
}) => {
  return (
    <>
      {searchModal ? (
        <div key={product.id} className="justify-content-between d-flex">
          <div>{product.name} </div>
          <button
            className="bg-primary btn"
            data-product-id={product.id}
            onClick={(e) => {
              setProductId(e.target.dataset.productId);
              setShowEditModal(true);
            }}
          >
            Edit
          </button>
          <button
            className="bg-danger btn"
            data-product-id={product.id}
            onClick={(e) => {
              setProductId(e.target.dataset.productId);
              setShowDeleteModal(true);
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
    </>
  );
};

export default SearchModal;
