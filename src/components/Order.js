import React, {useState, useEffect} from "react"
import schema from "../validation/formSchema"
import axios from "axios";


export default function Order (props) {

 
const {formValues, setFormValues, disabled, setDisabled, validate, formErrors} = props;

const submit = evt =>{
    
    console.log(evt)
    evt.preventDefault();
    axios.post("https://reqres.in/api/orders", formValues).then((response) => {
        console.log(response);
        
      })
      
    
    }
      
     




const onChange = evt =>{
    
    const {type, checked, name, value} = evt.target;
    validate(name, value)
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({...formValues, [name]:valueToUse })
}   


/// use Effect button is being disabled
    useEffect(()=>{
    schema.isValid(formValues).then(valid =>setDisabled(!valid))
}, [formValues])


    return (
        
            <form id="pizza-form" onSubmit={submit}>

            <h1>BUILD YOUR OWN PIZZA</h1>
            <label>
                name
                <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={onChange}
                    placeholder="for the order" />
            </label>
            <div>{formErrors.name}</div>

            <h2>Please Choose Your Pizza Size</h2>
            <label>
                Pizza Size
                <select id="size-dropdown" onChange={onChange} value={formValues.size} name="size">
                    <option value="select">---select---</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>

            </label>

            <br>
            </br>

            <h2>What kind of sauce do you prefer?</h2>
            Choice of Sauce
            <br></br>
            <label>
                Original Red
                <input type="radio"
                    name="sauce"
                    value="original-red"
                    checked={formValues.sauce === "original-red"}
                    onChange={onChange} />
            </label>
            <label>
                Garlic Ranch
                <input
                    type="radio"
                    name="sauce"
                    value="garlic-ranch"
                    checked={formValues.sauce === "garlic-ranch"}
                    onChange={onChange} />
            </label>
            <label>
                BBQ Sauce
                <input
                    type="radio"
                    name="sauce"
                    value="bbq-sauce"
                    checked={formValues.sauce === "bbq-sauce"}
                    onChange={onChange} />
            </label>
            <label>
                Spinach Alfredo
                <input
                    type="radio"
                    name="sauce"
                    value="spinach-alfredo"
                    checked={formValues.sauce === "spinach-alfredo"}
                    onChange={onChange} />
            </label>

            <h2>Let's add toppings!</h2>

            <label>
                Pepperoni
                <input
                    name="pepperoni"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues.pepperoni} />
            </label>
            <label>
                Sausage
                <input
                    name="sausage"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues.sausage} />
            </label>
            <label>
                Canadian Bacon
                <input
                    name="canadian-bacon"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['canadian-bacon']} />
            </label>
            <label>
                Spicy Italian Sausage
                <input
                    name="spicy-italian-sausage"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['spicy-italian-sausage']} />
            </label>
            <label>
                Grilled Chicken
                <input
                    name="grilled-chicken"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['grilled-chicken']} />
            </label>
            <label>
                Onions
                <input
                    name="onions"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues.onions} />
            </label>
            <label>
                Green Pepper
                <input
                    name="green-pepper"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues.checkbox} />
            </label>
            <label>
                Diced Tomatos
                <input
                    name="diced-tomatoes"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['diced-tomatoes']} />
            </label>

            <br></br>
            <label>
                Black Olives
                <input
                    name="black-olives"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['black-olives']} />
            </label>
            <label>
                Roasted Garlic
                <input
                    name="roasted-garlic"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['roasted-garlic']} />
            </label>
            <label>
                Artichoke Hearts
                <input
                    name="artichoke-hearts"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['artichoke-hearts']} />
            </label>
            <label>
                Three Cheese
                <input
                    name="three-cheese"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['three-cheese']} />
            </label>
            <label>
                Pineapple
                <input
                    name="pineapple"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues.pineapple} />
            </label>
            <label>
                Extra Cheese
                <input
                    name="extra-cheese"
                    type="checkbox"
                    onChange={onChange}
                    checked={formValues['extra-cheese']} />
            </label>
            <h2>
                Choice of Substitute
            </h2>
            <p>Choose up to 1</p>


            <label>
                Gluten Free crust
                <input
                    type="checkbox"
                    name="gluten-free"
                    checked={formValues["gluten-free"]}
                    onChange={onChange} />

            </label>

           



            <label>
            Special Instructions
            <input
                id="special-text"
                type="text"
                name="specialInstructions"
                value={formValues.specialInstructions}
                onChange={onChange}
                placeholder="for the order" />
        </label>
        <button type="submit" id="order-button" disabled={disabled}>Create Order</button>

                  
                        
    </form>
            

         
            
    )
}