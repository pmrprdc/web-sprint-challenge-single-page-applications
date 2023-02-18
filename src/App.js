import React from "react";
import {Route, Link} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Order from "./components/Order"
import Thankyou from "./components/Thankyou";
import Footer from "./components/Footer";
import {useState, useEffect} from "react"
import schema from "./validation/formSchema"
import * as yup from "yup"


const App = () => {
  const initialFormValues = {
    name:"",
    size: "--select--",
    sauce: "",
    pepperoni: false,
    sausage: false,
    ["canadian-bacon"]:false,
    ["spicy-italian-sausage"]: false,
    ["grilled-chicken"]: false,
    onions: false,
    ['green-pepper']: false,
    ['diced-tomatoes']: false,
    ['black-olives']: false,
    ['roasted-garlic']: false,
    ['artichoke-hearts']: false,
    ['three-cheese']:false,
    pineapple: false,
    ['extra-cheese']: false,
    ['gluten-free']: false,
    ['specialInstructions']: ""

    

  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState({})
  
  
  
  const validate = (name, value) =>{
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]:""}))
    .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  
  }
 
  return (
    <>
      <Nav />
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Order formErrors={formErrors} validate={validate} disabled={submitDisabled} setDisabled={setSubmitDisabled} formValues={formValues} setFormValues={setFormValues} />
      </Route>
      <Route path="/thank-you">
        <Thankyou />
      </Route>
      <Footer />
    </>
  );
};
export default App;
