import React from "react";
import {Route, Link} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <Nav />
      <Route path="/">
        <Home />
      </Route>
      <Route path="order">

      </Route>
      <Route path="/thank-you">

      </Route>

    </>
  );
};
export default App;
