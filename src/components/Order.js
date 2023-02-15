import React, {useState} from "react"
export default function Order (props) {

    
const onSubmit = evt =>{
    evt.preventDefault();
    
}

const onChange = evt =>{
    console.log('something changed')
}


    return (
            <form>
                <h1>BUILD YOUR OWN PIZZA</h1>
                <form>  

                    <h2>Please Choose Your Pizza Size</h2>
                        <label>
                            Pizza Size 
                             <select>
                            <option>small</option>
                            <option>medium</option>
                            <option>large</option>
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
                                <input type="radio" name="sauce" />
                            </label>
                            <label>
                                Garlic Ranch
                                <input type="radio" name="sauce" />
                            </label>
                            <label>
                                BBQ Sauce
                                <input type="radio" name="sauce" />
                            </label>
                            <label>
                                Spinach Alfredo
                                <input type="radio" name="sauce" />
                            </label>

                            <h2>Let's add toppings!</h2>

                                <label>
                                    Pepperoni
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Sausage
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Canadian Bacon
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Spicy Italian Sausage
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Grilled Chicken
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Onions
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Greem Pepper
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Diced Tomatos
                                    <input type="checkbox"/>
                                </label>
                               
                                <br></br>
                                <label>
                                    Black Olives
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Roasted Garlic
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Artichoke Hearts
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Three Cheese
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Pineapple
                                    <input type="checkbox"/>
                                </label>
                                <label>
                                    Extra Cheese
                                    <input type="checkbox"/>
                                </label>
                              
                            <button>Submit</button>
                        </label>

                  
                        
                </form>


            </form>
            
    )
}