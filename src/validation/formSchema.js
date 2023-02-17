import * as yup from "yup"


const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .required("A name for the order is required")
    .min(3, "Order name must be 3 characters or longer!")
    



})



export default formSchema;