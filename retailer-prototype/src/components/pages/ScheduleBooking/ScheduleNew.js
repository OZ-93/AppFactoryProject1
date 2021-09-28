import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../../controls/Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "../ClientDashboard/BookingService";
import PageHeader from '../../../controls/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import { Alert } from 'react-st-modal';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    Surname:'',
    IdNumber:'',
    Email: '',
    mobile: '',
    RetailerName: '',
    gender: 'male',
    PositionId: '',
    UploadCv:'',
    CandidateBrand:'',
    hireDate: new Date(),
    isPermanent: false,
    IName:'',
    IMobile:'',
    IEmail:'',
    IDesignation:'',
    RName:'',
    RMobile:'',
    REmail:'',
    RDesignation:''
}

export default function ScheduleBooking() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('Surname' in fieldValues)
            temp.Surname = fieldValues.Surname ? "" : "This field is required."
        if ('Email' in fieldValues)
            temp.Email = (/$^|.+@.+..+/).test(fieldValues.Email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('IdNumber' in fieldValues)
            temp.IdNumber = fieldValues.IdNumber.length >13 ? "" : "invalid Id."
        if ('RetailerName' in fieldValues)
            temp.RetailerName = fieldValues.RetailerName? "" : "This field is required."
        if ('CandidateBrand' in fieldValues)
            temp.CandidateBrand = fieldValues.CandidateBrand.length != 0 ? "" : "This field is required."
        if ('PositionId' in fieldValues)
            temp.PositionId = fieldValues.PositionId.length != 0 ? "" : "This field is required."
        if ('IName' in fieldValues)
            temp.IName = fieldValues.IName? "" : "This field is required."
        if ('IMobile' in fieldValues)
            temp.IMobile = fieldValues.IMobile? "" : "This field is required."
         if ('IEmail' in fieldValues)
            temp.IEmail = fieldValues.IEmail? "" : "This field is required."
         if ('IDesignation' in fieldValues)
            temp.IDesignation = fieldValues.IDesignation? "" : "This field is required."
         if ('RName' in fieldValues)
            temp.RName = fieldValues.RName? "" : "This field is required."
         if ('RMobile' in fieldValues)
            temp.RMobile = fieldValues.RMobile? "" : "This field is required."
        if ('REmail' in fieldValues)
            temp.REmail = fieldValues.REmail? "" : "This field is required."
            if ('RDesignation' in fieldValues)
            temp.RDesignation = fieldValues.RDesignation? "" : "This field is required."
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
            Alert('Successfully Captured');
            employeeService.insertEmployee(values)
            resetForm()
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
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                     <Controls.Input
                        name="Surname"
                        label="Enter Surname"
                        value={values.Surname}
                        onChange={handleInputChange}
                        error={errors.Surname}
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
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange }
                        error={errors.mobile}
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
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="PositionId"
                        label="Canditate Position"
                        value={values.PositionId}
                        onChange={handleInputChange}
                        options={employeeService.getPosition()}
                        error={errors.PositionId}
                        items={employeeService.getPosition}
                    />

                     <Controls.Select
                        name="CandidateBrand"
                        label="Candidate Brand"
                        value={values.CandidateBrand}
                        onChange={handleInputChange}
                        options={employeeService.getBrand()}
                        error={errors.CandidateBrand}
                        items={employeeService.getBrand}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Input
                        Name="UploadCv"
                        Label="Upload Cv"
                        Value={values.UploadCv}
                        type="file"
                        />
                    <div>
                        <input 

                        aria-label="Insert CV"
                        type="file"
                        name="File"
                        />
                    </div>

            

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    
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
                    <Controls.Input
                        label="Designation"
                        name="IDesgnation"
                        value={values.IDesignation}
                        onChange={handleInputChange}
                        error={errors.IDesignation}
                    />

                </Grid>
                <Grid item xs={6}>
                    <PageHeader
            title="Schedule"
            subTitle="Schedule New Booking"
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
                    <Controls.Input
                        label="Designation"
                        name="RDesgnation"
                        value={values.RDesignation}
                        onChange={handleInputChange}
                        error={errors.RDesignation}
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
