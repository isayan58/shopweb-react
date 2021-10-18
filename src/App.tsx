import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/common/Header';
import ProductDetails from './components/ProductDetails';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Contact} path="/contact" exact />
      <Route component={About} path="/about" exact />
      {/* <Route component={ProductDetails} path=':id' exact /> */}
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route component = {Login} path = "/sign-in" exact />
      <Route component = {Register} path = "/sign-up" exact />
    </Switch>
  </>
);

export default App;
