import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import ShoppingCart from './pages/ShoppingCart'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <ProductList/>
        </Route>
        <Route path="/cart">
          <ShoppingCart/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/> }
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register/> }
        </Route>
      </Switch>
    </Router>
  )
}

