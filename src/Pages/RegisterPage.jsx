import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errors, setErrors] = useState([]);

  const registerUser = (credentials) => {
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://localhost:80/api/register", credentials)
        .then((response) => {
          navigate("/login");
        })
        .catch((error) => {
          setErrors(error.response.data.errors);
        });
    });
  };

  useEffect(() => {
    if (userPassword === userPasswordConfirmation) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [userPasswordConfirmation, userPassword]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      return;
    }
    const credentials = {
      email: userEmail,
      password: userPassword,
      password_confirmation: userPasswordConfirmation,
      name: userName,
    };
    registerUser(credentials);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-1/3 mx-auto my-5 text-center"
    >
      <div className="p-2 form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
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
      <div className="p-2 form-group">
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input
          type="password"
          name="password_confirmation"
          className="form-control"
          id="password_confirmation"
          onChange={(e) => {
            setUserPasswordConfirmation(e.target.value);
          }}
        />
      </div>
      {!passwordMatch ? <p id="msg">Password must match!</p> : null}
      {Object.keys(errors).length
        ? Object.keys(errors).map((key) => <p key={key}>{errors[key]}</p>)
        : null}
      <button className="btn">Register</button>
    </form>
  );
};

export default RegisterPage;
