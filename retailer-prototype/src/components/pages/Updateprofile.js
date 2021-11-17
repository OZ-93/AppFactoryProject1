import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import UpdateIcon from "@mui/icons-material/Update";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import Box from "@mui/material/Box";
import * as yup from "yup";
import Grid from '@material-ui/core/Grid';
import TextField from "@mui/material/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import { Field, useFormik } from "formik";
import ShareIcon from "@material-ui/icons/Share";
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
} from "../accountBox/common";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Alert } from 'react-st-modal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
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

  currentpassword: yup
    .string()
    .matches(Password_REGEX, "Please enter a strong Password")
    .required(),

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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [Name, setName] =React.useState(false);
  const [surname, setsurname] = React.useState(false);
  const [number, setnumber] = React.useState(false);
  const [email, setemail] = React.useState(false);
  const [retailer, setretailer] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  React.useEffect( () => 
{
    axios.get("http://localhost:51153/api/Authenticate/User").then((response) => {
      setName(response.data);
      setsurname(response.data);
      setnumber(response.data);
      setemail(response.data);
      setretailer(response.data);
    });
  }, []);

  const onSubmit = async (values) => {
  
    const { confirmPassword, ...data } = values;

    const response = await axios
      .put("http://localhost:51153/api/Authenticate/User", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        alert(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      Alert('successful')
      formik.resetForm();
      

    }
  };

  const formik = useFormik({
    initialValues: {
      FirstName: Name.FirstName,
      LastName:surname.LastName,
      PhoneNumber:number.ContactNo,
      Email: email.Email,
      RetailerName: retailer.RetailerName,
      currentpassword:"",
     Password: "",
      ConfirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  if (!Name) return null;

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
    
      

     



      
  
    <Grid item xs={5}>
    

    <Card className={classes.root} >
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"

      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Below is your personal information. You can edit your information and
          save.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"></IconButton>
        <IconButton aria-label="share"></IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Update your personal information</Typography>
          <Typography paragraph>
            Below is your current information. Please save after updating.
          </Typography>
          {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <div>
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

            </div>
          </Box>
          <Typography paragraph></Typography>
          <Typography></Typography>
          <Typography>
          <SubmitButton type="submit" disabled={!formik.isValid}>
          update
        </SubmitButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    
    </Grid>
  );
}
