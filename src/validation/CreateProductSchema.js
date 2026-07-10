import * as yup from "yup"



let createProductSchema = yup.object({

    image: yup
        .mixed()
        .test(
            "required",
            "Product image is required",
            (value) => value && value.length > 0
        ),

    productName: yup
        .string()
        .required("productName must be required"),


    category: yup
        .string()
        .required("category must be required"),


    price: yup
        .number()
        .typeError("price must be a number")
        .positive("price must be greater than 0")
        .required("price must be required"),

    brand: yup
        .string()
        .required("brand must be required"),

    stock: yup
        .number()
        .typeError("stock must be a number")
        .min(0, "stock cannot be negative")
        .required("stock must be required"),

    discount: yup
        .number()
        .typeError("discount must be a number")
        .min(0, "discount cannot less than 0 ")
        .max(100, "discount cannot greater than 100")
        .required("discount must be required"),

    isNewArrival: yup
        .boolean(),


})

export default createProductSchema;