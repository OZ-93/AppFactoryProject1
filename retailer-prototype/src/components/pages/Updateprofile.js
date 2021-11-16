import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import UpdateIcon from "@mui/icons-material/Update";
import Button from "@mui/material/Button";
import MuiPhoneNumber from "material-ui-phone-number";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

export default function RecipeReviewCard() {
  const classes = useStyles();
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
    <Card className={classes.root}>
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
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="Name"
                label="First Name"
                defaultValue={Name.firstName}
                variant="standard"
              />
              <TextField
                id="Surname"
                label="Last Name"
                defaultValue={surname.lastName}
                variant="standard"
              />
              <MuiPhoneNumber
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"za"}
              />
              <TextField
                id="email"
                label="Email"
                defaultValue={email.Email}
                variant="standard"
              />
              <TextField
                id="retailer"
                label="Retailer"
                defaultValue={retailer.RetailerName}
                variant="standard"
              />
              <TextField
                id="currentPassword"
                label="Current Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />

              <TextField
                id="NewPassword"
                label="New Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <TextField
                id="confirmpassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
          </Box>
          <Typography paragraph></Typography>
          <Typography></Typography>
          <Typography>
            <Button
              maxWidth="500"
              variant="contained"
              startIcon={<UpdateIcon />}
              disableElevation
            >
              Update
            </Button>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
  );
}
