import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [errors, setErrorMsg] = useState();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://localhost:80/api/login", {
          email: userEmail,
          password: userPassword,
        })
        .then((data) => {
          localStorage.setItem("user-info", JSON.stringify(data.data));
          navigate("/");
        })
        .catch((naspa) => {
          setErrorMsg(naspa.response.data.errors);
        });
    });
  };

  return (
    <div className="w-1/3 mx-auto my-5 text-center">
      <form onSubmit={handleLoginForm}>
        <div>
          <div className="p-2 form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="p-2 form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          {errors
            ? Object.keys(errors).map((key) => <p key={key}>{errors[key]}</p>)
            : null}
          <div>
            <button className="btn">Login</button>
          </div>
        </div>
      </form>
      <div>
        <p>Need an account?</p>
        <Link
          className="p-3 text-gray-900 hover:text-gray-400 text-decoration-none"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="p-3 text-gray-900 hover:text-gray-400 text-decoration-none"
          to="/forgot-password"
        >
          Forgot Password
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
