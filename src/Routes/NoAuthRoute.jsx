import { Navigate } from "react-router-dom";
const NoAuthRoute = (props) => {
  return !localStorage.getItem("user-info") ? (
    props.children
  ) : (
    <Navigate to="/" replace></Navigate>
  );
};

export default NoAuthRoute;
