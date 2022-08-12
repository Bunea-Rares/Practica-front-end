import axios from "axios";
const EditForm = ({ showModal, setShowEditModal, id, setUpdate }) => {
  let productData = {};

  const handleSaveEdit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = {};
    for (var [key, value] of formData.entries()) {
      data[key] = value;
    }
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .put("http://localhost:80/api/product/" + id, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUpdate((prev) => prev + 1));
    });
    setShowEditModal(false);
  };
  if (showModal) {
    const product = document.getElementById(`product-${id}`)?.children;
    productData = {
      name: product[0].innerText?.split(" ").slice(1).join(" "),
      description: product[1].innerText?.split(" ").slice(1).join(" "),
      id: product[2].innerText?.split(" ").slice(1).join(" "),
      quantity: product[3].innerText?.split(" ").slice(1).join(" "),
      status: product[4].innerText?.split(" ").slice(1).join(" "),
      price: product[5].innerText?.split(" ").slice(1).join(" "),
      category_id: product[6].innerText?.split(" ").slice(2).join(" "),
    };
  }
  return (
    <>
      {showModal ? (
        <form onSubmit={handleSaveEdit} className="overflow-hidden ">
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none n focus:outline-none">
              <div className="relative w-3/5 max-w-5xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <h3 className="text-3xl font-semibold">Edit Product</h3>
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowEditModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="">
                    <div className="p-2 form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue={productData.name}
                      />
                    </div>
                    <div className="p-2 form-group">
                      <label htmlFor="category_id">Category Id:</label>
                      <input
                        type="text"
                        id="category_id"
                        name="category_id"
                        className="form-control"
                        defaultValue={productData.category_id}
                      />
                    </div>
                    <div className="p-2 form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="form-control"
                        rows="4"
                        defaultValue={productData.description}
                      />
                    </div>
                    <div className="p-2 form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        className="form-control"
                        id="quantity"
                        defaultValue={productData.quantity}
                      />
                    </div>
                    <div className="p-2 form-group">
                      <label className="text-center" htmlFor="status">
                        Status
                      </label>
                      <input
                        type="text"
                        name="status"
                        className="form-control"
                        id="status"
                        defaultValue={productData.status}
                      />
                    </div>
                    <div className="p-2 form-group">
                      <label htmlFor="status">Price</label>
                      <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="price"
                        defaultValue={productData.price}
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowEditModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        </form>
      ) : null}
    </>
  );
};

export default EditForm;
