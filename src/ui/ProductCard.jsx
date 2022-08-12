const ProductCard = ({
  product,
  setProductId,
  setShowEditModal,
  setShowDeleteModal,
}) => {
  return (
    <div className="mb-3 overflow-hidden col-lg-4 d-flex align-items-stretch">
      <div className="p-2 card" id={"product-" + product.id} key={product.id}>
        <div>Name: {product.name}</div>
        <div>Description: {product.description}</div>
        <div>Product Id: {product.id}</div>
        <div>Quantity: {product.quantity}</div>
        <div>Status: {product.status}</div>
        <div>Price: {product.price}</div>
        <div>Category Id: {product.category_id}</div>
        <button
          className="m-2 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="popup-modal"
          id={product.id}
          onClick={(e) => {
            setProductId(e.target.id);
            setShowEditModal(true);
          }}
        >
          Edit
        </button>
        <button
          className="m-2 block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          data-modal-toggle="popup-modal"
          id={product.id}
          onClick={(e) => {
            setProductId(e.target.id);
            setShowDeleteModal(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
