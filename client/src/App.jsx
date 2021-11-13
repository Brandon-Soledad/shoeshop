import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'
import Success from './pages/Success'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/carts">
          <ShoppingCart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/home"><Home/></Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

