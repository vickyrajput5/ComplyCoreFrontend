import * as Yup from "yup";

export const RegistrationScehma = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password not match"),
  phone: Yup.number()
    .typeError("Please enter a valid number")
    .min(10)
    .required("Please enter your contact number"),
});
