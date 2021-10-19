import { Field, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import routes from "../../routes";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  SubmitButton,
  Input2
} from "./common";
import { AccountContext } from "../accountBox/accountContext";
import * as yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Main from "../../Assets/main/Main";
import ForgotForm from "./ForgotForm";

const validationSchema = yup.object({
  UserName: yup.string().required(),
  Password: yup.string().required(),
});

export function Login(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgot } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const location = {
    pathname: '/dashboard',
    state: {fromDashboard: true}
  } 

  const history = useHistory();

  

 // const onSubmit =  (values) => {
    
    //props.history.push(routes.dashboard);
 // };
 /* const response = await axios
      ( values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });
      

    if (response) {
      alert("Welcome back in. Authenticating...") ;
    }
  };*/

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios
      .post("https://localhost:44365/api/Authenticate/login", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        alert("err")
      });

    if (response) {
      alert("Welcome back in. Authenticating...");
      history.push(location);
    }
  };

  const formik = useFormik({
    initialValues: { UserName: "", Password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="UserName"
            placeholder="Email"
            value={formik.values.UserName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.UserName && formik.errors.UserName
                ? formik.errors.UserName
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="Password"
            type="password"
            placeholder="Password"
            value={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.Password && formik.errors.Password
                ? formik.errors.Password
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink href="#">Forgot Password?
          <BoldLink href="#" onClick={switchToForgot}>
            click here
          </BoldLink>
        </MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Login
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}