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
                        onChange={handleInputChange}
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
