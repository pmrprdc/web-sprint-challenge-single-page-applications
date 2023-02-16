import React, {useState} from "react"
export default function Order (props) {


const {formValues, setFormValues} = props;

const onSubmit = evt =>{
    evt.preventDefault();
    console.log("form submit")
}

const onChange = evt =>{
    console.log(evt.target)
    const {type, checked, name, value} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({...formValues, [name]:valueToUse })
    

}   


    return (
            <form>
                <h1>BUILD YOUR OWN PIZZA</h1>
                <form>  

                    <h2>Please Choose Your Pizza Size</h2>
                        <label>
                            Pizza Size 
                             <select onChange={onChange} value={formValues.size} name="size">
                            <option value="select">---select---</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>  

                        </label>

                            <br>
                            </br>
                        <label>
                            <h2>What kind of sauce do you prefer?</h2>
                            Choice of Sauce
                            <br></br>
                            <label>
                                Original Red
                                <input type="radio"
                                name="sauce"
                                value="original-red"
                                checked={formValues.sauce==="original-red"}
                                onChange={onChange} />
                            </label>
                            <label>
                                Garlic Ranch
                                <input 
                                type="radio" 
                                name="sauce" 
                                value="garlic-ranch"
                                checked={formValues.sauce==="garlic-ranch"}
                                onChange={onChange}
                                />
                            </label>
                            <label>
                                BBQ Sauce
                                <input
                                 type="radio" 
                                 name="sauce" 
                                 value="bbq-sauce"
                                 checked={formValues.sauce==="bbq-sauce"}
                                 onChange={onChange}
                                  />
                            </label>
                            <label>
                                Spinach Alfredo
                                <input
                                 type="radio" 
                                 name="sauce"  
                                 value="spinach-alfredo"
                                 checked={formValues.sauce==="spinach-alfredo"}
                                 onChange={onChange}
                                />
                            </label>

                            <h2>Let's add toppings!</h2>

                                <label>
                                    Pepperoni
                                    <input name="pepperoni" type="checkbox"/>
                                </label>
                                <label>
                                    Sausage
                                    <input name ="sausage" type="checkbox"/>
                                </label>
                                <label>
                                    Canadian Bacon
                                    <input name="canadian-bacon"type="checkbox"/>
                                </label>
                                <label>
                                    Spicy Italian Sausage
                                    <input name="spicy-italian-sausage" type="checkbox"/>
                                </label>
                                <label>
                                    Grilled Chicken
                                    <input name="grilled-chicken" type="checkbox"/>
                                </label>
                                <label>
                                    Onions
                                    <input name="onions" type="checkbox"/>
                                </label>
                                <label>
                                    Greem Pepper
                                    <input name="green-pepper" type="checkbox"/>
                                </label>
                                <label>
                                    Diced Tomatos
                                    <input name="diced-tomatoes" type="checkbox"/>
                                </label>
                               
                                <br></br>
                                <label>
                                    Black Olives
                                    <input name="black-olives" type="checkbox"/>
                                </label>
                                <label>
                                    Roasted Garlic
                                    <input name="roasted-garlic" type="checkbox"/>
                                </label>
                                <label>
                                    Artichoke Hearts
                                    <input name="artichoke-hearts" type="checkbox"/>
                                </label>
                                <label>
                                    Three Cheese
                                    <input name="three-cheese" type="checkbox"/>
                                </label>
                                <label>
                                    Pineapple
                                    <input name="pineapple" type="checkbox"/>
                                </label>
                                <label>
                                    Extra Cheese
                                    <input name="extra-cheese" type="checkbox"/>
                                </label>
                               <h2>
                                Choice of Substitute
                               </h2>
                               <p>Choose up to 1</p>

                               
                               <label>
                                    Gluten Free crust
                                    <input type="checkbox"/>
                                </label>

                                <h2>Special Instructions</h2>
                                <input type="text"/>
                                
                                <div>
                                    <h1>Running Total</h1>
                                    <h1>1$</h1>
                                    <button>increase</button>
                                    <button>decrease</button>
                                </div>
                            <button>Add Selected To Order</button>
                        </label>

                  
                        
                </form>


            </form>
            
    )
}