import * as yup from "yup"


const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .required("A name for the order is required")
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string(),
    sauce: yup
    .string(),
    pepperoni: yup
    .boolean(),
    sausage: yup.bool(),
    ["canadian-bacon"]:yup.bool(),
    ["spicy-italian-sausage"]: yup.bool(),
    ["grilled-chicken"]: yup.bool(),
    onions: yup.bool(),
    ['green-pepper']: yup.bool(),
    ['diced-tomatoes']: yup.bool(),
    ['black-olives']: yup.bool(),
    ['roasted-garlic']: yup.bool(),
    ['artichoke-hearts']: yup.bool(),
    ['three-cheese']:yup.bool(),
    pineapple: yup.bool(),
    ['extra-cheese']: yup.bool(),
    ['gluten-free']: yup.bool(),
    ['specialInstructions']: yup.string()
    

    
})



export default formSchema;