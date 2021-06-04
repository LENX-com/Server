import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./dashboard/components/user/Signin";
import Signup from "./dashboard/components/user/Signup";
import PrivateRoutes from "../src/auth/PrivateRoutes";
import Dashboard from "./dashboard/Dashboard";
import AdminRoute from "../src/auth/AdminRoute";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./marketplace/components/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./marketplace/components/cart/Cart";
import Orders from "./admin/Orders";
import Profile from "./dashboard/components/user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Header from "./marketplace/components/header/Header";
import ForgotPassword from "./pages/password/ForgotPassword";
import ResetPassword from "./pages/password/ResetPassword";
import Home from "./pages/home/Home";
import Posts from "./marketplace/components/posts/Posts";
import Post from "./marketplace/components/post/Post";
import Category from "./pages/categories/Category";
import Footer from "./marketplace/components/footer/Footer";
import Manufacturer from "./manufacturer/Manufacturer";

function Routes() {
  return (
    <>
    
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoutes path="/user/dashboard" component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <PrivateRoutes path="/profile/:userId" exact component={Profile} />
        <PrivateRoutes
          path="/admin/products"
          exact
          component={ManageProducts}
        />
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
        <Route exact path="/posts/" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/category/:id" component={Category} />
        <Route
          exact
          path="/manufacturer/:userId"
          component={Manufacturer}
        />
      </Switch>

      <Footer />
    </>
  );
}

export default Routes;
