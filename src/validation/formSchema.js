import * as yup from "yup"


const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .required("A name for the order is required")
    .min(2, "name must be at least 2 characters")
    
})



export default formSchema;