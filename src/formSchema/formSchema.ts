import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),

  message: yup.string().required("Message is required"),
});
