import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoute";
import PrivateRoute from "./auth/helper/PrivateRoute";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import ManageUserProducts from "./admin/ManageUserProducts";
import UpdatetheAd from "./admin/UpdateAd";
import CategoryPage from "./core/CategoryPage";
import ManageReviewProducts from "./admin/ManageReviewProducts"
//ALL THE ROUTES FOR THE FRONTEND
//<PrivateRoute> ARE ACCESSIBLE BY SIGNED IN USERS
//<AdminRoute> ARE ACCESSIBLE BY ADMIN ONLY
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/category/:categoryId" exact component={CategoryPage} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/ad/create" exact component={AddProduct} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/create/category" exact component={AddCategory} />
        <AdminRoute path="/ad/create" exact component={AddProduct} />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/reviewads" exact component={ManageReviewProducts} />
        <PrivateRoute path="/user/products" exact component={ManageUserProducts} />
        <PrivateRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdatetheAd}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
