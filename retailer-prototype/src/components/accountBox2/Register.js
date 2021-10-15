
import { Field, useFormik } from "formik";
import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer, 
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
  FormError,
} from "./common";
import { AccountContext } from "../accountBox/accountContext";
import * as yup from "yup";
import axios from "axios";
import { Marginer } from "../marginer";
//import ContactNoInput, { isSupportedCountry } from 'react-PhoneNumber-number-input';
import routes from "../../routes";
import { useHistory, Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { RadioButtonChecked } from "@material-ui/icons";







const Password_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const validationSchema = yup.object({
  FirstName: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Full name is required!"),
  
  LastName: yup
    .string()
    .required("Last Name is required"),
  
  PhoneNumber: yup
    .string()
    .required("PhoneNumber number is required"),
  
  Email: yup.string().email("Please enter a valid Email address").required(),
  
  RetailerName: yup
    .string()
    .max(15,"Please enter valid RetailerName")
    .required("Please enter RetailerName"),

  Password: yup
    .string()
    .matches(Password_REGEX, "Please enter a strong Password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your Password")
    .when("Password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("Password")], "Password does not match"),
    }),
});

export function Register(props) {
  
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const location = {
    pathname: '/Dashboard',
    state: {fromDashboard: true}
  } 

  const history = useHistory();

 

  

  /*const onSubmit= (values)=>{
    alert(JSON.stringify(values));
    history.push(location);
  }*/

  //fadsadasdasdsadsafafasfasfsa

  const onSubmit = async (values) => {
  
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("https://localhost:44359/api/Authenticate/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        alert(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      alert('successful', response.data.message)
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName:"",
      PhoneNumber:"",
      Email: "",
      RetailerName:'',
     
      Password: "",
      ConfirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
 
  console.log("Error", error);
  

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}

      

     



      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="FirstName"
            placeholder="Full Name"
            value={formik.values.FirstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.FirstName && formik.errors.FirstName
              ? formik.errors.FirstName
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="LastName"
            placeholder="Last Name"
            value={formik.values.LastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.LastName && formik.errors.LastName
              ? formik.errors.LastName
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
        <Input
            name="PhoneNumber"
            type="number"
            placeholder="PhoneNumber"
            value={formik.values.PhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FieldContainer>

        <FieldContainer>
          <Input
            name="Email"
            placeholder="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.Email && formik.errors.Email
              ? formik.errors.Email
              : ""}
          </FieldError>
        </FieldContainer>

         <FieldContainer>
          <Input
            
            name="RetailerName"
            placeholder="RetailerName"
            value={formik.values.RetailerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.RetailerName && formik.errors.RetailerName
              ? formik.errors.RetailerName
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="Password"
            type="Password"
            placeholder="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.Password && formik.errors.Password
              ? formik.errors.Password
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="confirmPassword"
            type="Password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </FieldError>
        </FieldContainer>

        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Signup
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" >
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
            }
