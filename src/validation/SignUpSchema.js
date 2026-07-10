import * as yup from "yup"


let signUpSchema = yup.object({

    name: yup
        .string()
        .trim()
        .required("name is must mandatory"),

    email: yup
        .string()
        .email("invalid email")
        .required("email must be mandatory")
        .max(30)
        .lowercase(),

    password: yup
        .string()
        .min(8)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.")
        .required("password must be required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "password do not match ")
        .required("confirm password must be required"),


});

export default signUpSchema


