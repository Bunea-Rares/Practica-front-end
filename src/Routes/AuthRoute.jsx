import { Navigate } from "react-router-dom";
const AuthRoute = (props) => {
  return localStorage.getItem("user-info") ? (
    props.children
  ) : (
    <Navigate to="/login" replace></Navigate>
  );
};

export default AuthRoute;
