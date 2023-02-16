import React from "react";
import {Route, Link} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Order from "./components/Order"
import Thankyou from "./components/Thankyou";
import Footer from "./components/Footer";
import {useState} from "react"



const App = () => {
  const initialFormValues = {
    size: "large"

  }
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Order formValues={formValues} setFormValues={setFormValues} />
      </Route>
      <Route path="/thank-you">
        <Thankyou />
      </Route>
      <Footer />
    </>
  );
};
export default App;
