import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../../controls/Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "../ClientDashboard/BookingService";
import PageHeader from '../../../controls/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import { Alert } from 'react-st-modal';
import axios from "axios";




const initialFValues = {
    id : 0,
    firstName : '',
    lastName :'',
    IdNumber :'',
    Email : '',
    contactNo: '',
    RetailerName: '',
    ShortListedPosition: '',
    BranchName:'',
    PreferredDate: new Date(),
    IName:'',
    AssessmentType:'',
    IMobile:'',
    IEmail:'',
    RName:'',
    RMobile:'',
    REmail:''
   
   
}

export default function ScheduleBooking() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('Email' in fieldValues)
            temp.Email = (/$^|.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid."
        if ('conatactN' in fieldValues)
            temp.contactNo = fieldValues.contactNo.length > 9 ? "" : "Minimum 10 numbers required."
        if ('IdNumber' in fieldValues)
            temp.IdNumber = fieldValues.IdNumber.length >=13 ? "" : "invalid Id."
        if ('RetailerName' in fieldValues)
            temp.RetailerName = fieldValues.RetailerName? "" : "This field is required."
        if ('BranchName' in fieldValues)
            temp.BranchName = fieldValues.BranchName.length != 0 ? "" : "This field is required."
        if ('ShortListedPosition' in fieldValues)
            temp.ShortListedPosition = fieldValues.ShortListedPosition.length != 0 ? "" : "This field is required."
        if ('AssessmentType' in fieldValues)
            temp.AssessmentType = fieldValues.AssessmentType.length != 0 ? "" : "This field is required."
        if ('IName' in fieldValues)
            temp.IName = fieldValues.IName? "" : "This field is required."
        if ('IMobile' in fieldValues)
            temp.IMobile = fieldValues.IMobile? "" : "This field is required."
        if ('IEmail' in fieldValues)
            temp.IEmail = fieldValues.IEmail? "" : "This field is required."
        
        
        if ('RName' in fieldValues)
            temp.RName = fieldValues.RName? "" : "This field is required."
        if ('RetailerDesignation' in fieldValues)
            temp.RetailerDesignation = fieldValues.RetailerDesignation? "" : "this field is required."
        
        if ('RMobile' in fieldValues)
            temp.RMobile = fieldValues.RMobile.length > 9 ? "" : "Minimum 10 numbers required."
        
        
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
           
           
            const response =  axios
             .post("https://localhost:44306/api/AssessmentBooking/AddAssessment", values)
            .catch((err) => {
                if (err && err.response) setErrors(err.response.data.message);
            alert("err")
      });

      if (response) {
        
        Alert('Successfully Captured');
      }
            employeeService.insertEmployee(values)
            resetForm()
        }else
        {
            Alert('error!!!!!!!')

        }

    }

    const useStyles = makeStyles(theme => ({
        pageContent: {
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
    }))
    const classes = useStyles();
    return (
        
       <main>
        <Paper className={classes.pageContent}>
       <Form onSubmit={handleSubmit}>
           <PageHeader
        title="Schedule"
        subTitle="Schedule New Booking"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}/>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="firstName"
                        label="Full Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                     <Controls.Input
                        name="lastName"
                        label="Enter lastName"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Controls.Input
                        label="Identity Number"
                        name="IdNumber"
                        value={values.IdNumber}
                        onChange={handleInputChange}
                        error={errors.IdNumber}
                    />
                    <Controls.Input
                        label="Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        error={errors.Email}
                    />
                    <Controls.Input
                        label="contactNo"
                        name="contactNo"
                        value={values.contactNo}
                        onChange={handleInputChange }
                        error={errors.contactNo}
                    />
                    <Controls.Input
                        label="Retailer Name"
                        name="RetailerName"
                        value={values.RetailerName}
                        onChange={handleInputChange}
                        error={errors.RetailerName}
                    />

                </Grid>
                <Grid item xs={6}>
                  
                    <Controls.Input
                        name="ShortListedPosition"
                        label="Canditate Position"
                        value={values.ShortListedPosition}
                        onChange={handleInputChange}
                        error={errors.ShortListedPosition}
                    
                    />

                    <Controls.Select
                        name="AssessmentType"
                        label="Assessment Type"
                        value={values.AssessmentType}
                        onChange={handleInputChange}
                        options={employeeService.Assessment()}
                        error={errors.AssessmentType}
                        items={employeeService}
                    />

                     <Controls.Input
                        name="BranchName"
                        label="Brand Name"
                        value={values.BranchName}
                        onChange={handleInputChange}
                        error={errors.BranchName}
                   
                    />
                    <Controls.DatePicker
                        name="PreferredDate"
                        label="Preferred Date"
                        value={values.PreferredDate}
                        onChange={handleInputChange}
                    />

                    
                    <div>
                        <input 

                        aria-label="Insert CV"
                        type="file"
                        name="File"
                        />
                    </div>

            

                   

                    
                </Grid>
            </Grid>
       
         <h2 > </h2>
            <Grid container>
                <Grid item xs={6}>
                <PageHeader
        title="Schedule"
        subTitle="Person Responsible for Payment"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}/>
                    <Controls.Input
                        name="IName"
                        label="Full Name"
                        value={values.IName}
                        onChange={handleInputChange}
                        error={errors.IName}
                    />
                    
                    <Controls.Input
                        label="Email"
                        name="IEmail"
                        value={values.IEmail}
                        onChange={handleInputChange}
                        error={errors.IEmail}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="IMobile"
                        value={values.IMobile}
                        onChange={handleInputChange}
                        error={errors.IMobile}
                    />
            
                    
                    

                </Grid>
                <Grid item xs={6}>
                    <PageHeader
            title="Schedule"
            subTitle="Recieving Results"
             icon={<PeopleOutlineTwoToneIcon fontSize="large" />}/>
                    <Controls.Input
                        name="RName"
                        label="Full Name"
                        value={values.RName}
                        onChange={handleInputChange}
                        error={errors.RName}
                    />
                    
                    <Controls.Input
                        label="Email"
                        name="REmail"
                        value={values.REmail}
                        onChange={handleInputChange}
                        error={errors.REmail}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="RMobile"
                        value={values.RMobile}
                        onChange={handleInputChange}
                        error={errors.RMobile}
                    />
                    
                    

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
        </Paper>
        </main>
    )
}
