import { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:80/sanctum/csrf-cookie").then((response) => {
      axios
        .post("http://localhost:80/api/forgot-password", { email })
        .then((msg) => {
          setResponse(msg.data.data);
        });
    });
  };
  return (
    <div className="w-1/3 mx-auto my-5 text-center">
      <form onSubmit={handleSubmit}>
        <div className="p-2 form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn ">Reset Password</button>
        {response !== "" ? <p>{response}</p> : null}
      </form>
    </div>
  );
};

export default ForgotPassword;
