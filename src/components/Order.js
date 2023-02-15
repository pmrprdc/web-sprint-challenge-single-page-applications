import React, {useState} from "react"


export default function Order (props) {

    
const onSubmit = evt =>{
    evt.preventDefault();
    
}


    return (
            <form>
                <h1>BUILD YOUR OWN PIZZA</h1>
                <form>  
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
                            
                            <button>Submit</button>
                        </label>

                  
                        
                </form>


            </form>
            
    )
}