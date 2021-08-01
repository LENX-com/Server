import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../src/auth/PrivateRoutes";
import Dashboard from "./dashboard/Dashboard";
import AdminRoute from "../src/auth/AdminRoute";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Product from "./pages/product/Product";
import Orders from "./admin/Orders";
import Profile from "./dashboard/components/user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import MarketPlace from "./marketplace/MarketPlace";
import ForgotPassword from "./pages/password/ForgotPassword";
import ResetPassword from "./pages/password/ResetPassword";
import Home from "./pages/home/Home";
import Signin from "./dashboard/components/user/Signin";
import Cart from "./marketplace/components/cart/Cart";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Placeorder from "./pages/Placeorder";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/marketplace" component={MarketPlace} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/shipping" exact component={Shipping} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/placeorder" exact component={Placeorder} />
        <PrivateRoutes path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoutes path="/profile/:userId" exact component={Profile} />
        <PrivateRoutes
          path="/admin/products"
          exact
          component={ManageProducts}
        />
        <Route path="/signin" exact component={Signin} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route
          path="/users/password/reset/:token"
          exact
          render={(props) => <ResetPassword {...props} />}
        />
      </Switch>
    </>
  );
}

export default Routes;
