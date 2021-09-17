import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './screens/Home';
import './App.css';
import Cart from './screens/Cart';
import Header from './components/Header';
import Login from './screens/Login';
import AllProducts from './screens/AllProducts';
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
import ProfitableProduct from './screens/ProfitableProduct';
import TotalSoldProduct from './screens/TotalSoldProduct';
import MyOrder from './screens/MyOrder';
import MyAccount from './screens/MyAccount';
import NotFound from './screens/NotFound';
import PrivateRoute from './components/PrivateRoute';
import About from './screens/About';
import Admin from './screens/Admin';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" children={<AllProducts />} />
        <PrivateRoute path="/dashboard/product/add" children={<AddProduct />} />
        <PrivateRoute path="/dashboard/product/:id/edit" children={<EditProduct />} />
        <PrivateRoute path="/dashboard/top-profitable-product" children={<ProfitableProduct />} />
        <PrivateRoute path="/dashboard/total-sold-product" children={<TotalSoldProduct />} />
        <PrivateRoute path="/dashboard/my-order" children={<MyOrder />} />
        <PrivateRoute path="/dashboard/my-account" children={<MyAccount />} />
        <PrivateRoute path="/about" children={<About />} />
        <PrivateRoute path="/admin" children={<Admin />} />

        <Route path="*" component={NotFound} />

      </Switch>
    </Router>
  );
};

export default App;

