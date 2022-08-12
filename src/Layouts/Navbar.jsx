import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user-info");
  return (
    <div className="flex-row justify-between align-baseline d-flex">
      {user ? (
        <>
          <Link
            className="p-3 text-gray-900 btn hover:text-gray-400 text-decoration-none"
            to="/Store"
          >
            Store{" "}
          </Link>
          <Link
            className="p-3 text-gray-900 btn hover:text-gray-400 text-decoration-none"
            to="/add-product"
          >
            Add Product{" "}
          </Link>
          <Link
            className="p-3 text-gray-900 btn hover:text-gray-400 text-decoration-none"
            to="/manage-categories"
          >
            Add Category{" "}
          </Link>
          <button
            className="btn"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logut
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
