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
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgot } = useContext(AccountContext);
  const [error, setError] = useState(null);
  const location = {
    pathname: '/dashboard',
    state: {fromDashboard: true}
  } 

  const history = useHistory();

  

  const onSubmit =  (values) => {
    history.push(location);
    //props.history.push(routes.dashboard);
  };
 /* const response = await axios
      ( values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
      });
      

    if (response) {
      alert("Welcome back in. Authenticating...") ;
    }
  };*/

  const formik = useFormik({
    initialValues: { email: "", password: "" },
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
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
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