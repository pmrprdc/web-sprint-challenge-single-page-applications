import React from "react";
import {Route, Link} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Order from "./components/Order"
import Thankyou from "./components/Thankyou";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/thank-you">
        <Thankyou />
      </Route>
      <Footer />
    </>
  );
};
export default App;
