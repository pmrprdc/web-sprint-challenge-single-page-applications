import * as yup from "yup"


const formSchema = yup.object().shape({

    name: yup.object();



})



export default formSchema;