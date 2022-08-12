import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AuthRoute from "./Routes/AuthRoute";
import StorePage from "./Pages/StorePage";
import HomePage from "./Pages/HomePage";
import NoAuthRoute from "./Routes/NoAuthRoute";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPassword from "./Pages/ForgotPassword";
import Navbar from "./Layouts/Navbar";
import ManageCategories from "./Pages/ManageCategories";
import AddProduct from "./Pages/AddProduct";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/login"
          element={
            <NoAuthRoute>
              <LoginPage />
            </NoAuthRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <NoAuthRoute>
              <RegisterPage />
            </NoAuthRoute>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <NoAuthRoute>
              <ForgotPassword />
            </NoAuthRoute>
          }
        ></Route>
        <Route
          path="/store"
          element={
            <AuthRoute>
              <StorePage />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/manage-categories"
          element={
            <AuthRoute>
              <ManageCategories />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <AuthRoute>
              <AddProduct />
            </AuthRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
