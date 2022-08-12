import axios from "axios";
const DeleteProduct = ({
  showDeleteModal,
  setShowDeleteModal,
  id,
  setUpdate,
}) => {
  const handleDelete = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user-info")).data.token;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .delete("http://localhost:80/api/product/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (parseInt(response.status) === 204) {
            setUpdate((prev) => prev + 1);
          }
        });
    });
    setShowDeleteModal(false);
  };
  return (
    <>
      {showDeleteModal ? (
        <form className="overflow-hidden" onSubmit={handleDelete}>
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <h3 className="text-3xl font-semibold">Delete Product</h3>
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div>
                    <p>
                      Deleting a product will permanently remove it from the DB,
                      are you sure?
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="submit"
                    >
                      Delete
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

export default DeleteProduct;
