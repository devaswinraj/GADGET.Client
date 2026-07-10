import * as yup from "yup"



let loginSchema = yup.object({

    email: yup
        .string()
        .lowercase()
        .email("invalid email")
        .required("email must be mandatory"),


    password: yup
        .string()
        .required("password must be required")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."),
})

export default loginSchema;