import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import ConfirmationPage from "./pages/ConfirmationPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomepage from "./pages/AdminHomepage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProduct from "./components/Admin/EditProduct";
import OrderManagement from "./components/Admin/OrderManagement";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="order-confirmation" element={<ConfirmationPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomepage />} />
          <Route path="users" element={<UserManagement/>} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="product/:id/edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
