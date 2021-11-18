import React, { useState, useEffect } from 'react'

import PageHeader from "../../controls/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../controls/useTable";
import * as employeeService from "./ClientDashboard/BookingService";
import Controls from "../../controls/Controls";
import { Search } from "@material-ui/icons";
import {CSVLink} from "react-csv";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))




const headCells = [
    { id: 'fullName', label: 'Full Name' },
    { id: 'Surname', label: 'Surname' },
    { id: 'IdNumber', label: 'ID Number' },
    { id: 'Email', label: 'Email Address (Personal)' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'RetailerName', label: 'Retailer Name'},
    { id: 'gender', label: 'Gender'},
    { id: 'PositionId', label: 'Candidate Position', disableSorting: true },
    { id: 'CandidateBrand', label: 'Candidate Brand', disableSorting: true },
    { id: 'hireDate', label:'Date'},
    { id: 'status', label: 'Status'},
]

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [isLoaded, setIsLoaded] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState('');
    const [items,setItems] = useState([]);
    const [error, setError] = useState(null);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
    
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  const handleChange = (event) =>{
      setAnchorEl(event.target.value);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };


    useEffect(()=>{
        //if localhost number changes, change it on fetch as well
        fetch("https://localhost:44394/api/AssessmentBookingDetail")
          .then(res => res.json())
          .then(
            result => {
              setIsLoaded(true);
             
              let data=[];
              data.push(["DetailID","Firstname","Lastname","ContactNo","Email","Designation"])
              for(let i=0;i<result.length;i++)
              {
                let resultData=result[i];
                data.push([resultData.DetailID,resultData.Firstname,resultData.Lastname,resultData.ContactNo,resultData.Email,resultData.Designation]);
              }
              setItems(data);
              
            },
           
            (error) => {
              console.log("inputJSON1",error);
              setIsLoaded(true);
              setError(error);
            }
          )
    },)

    const inputJSON = items;
    console.log("inputJSON",inputJSON);

    return (
        <main>
        <div>
            
            <PageHeader
                title="Logged Bookings"
                subTitle="Update Candidate Status"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.Surname}</TableCell>
                                    <TableCell>{item.IdNumber}</TableCell>
                                    <TableCell>{item.Email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.RetailerName}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>{item.PositionId}</TableCell>
                                    <TableCell>{item.CandidateBrand}</TableCell>
                                    <TableCell>{item.hireDate}</TableCell>
                                    <TableCell>{item.Status}
                                       <FormControl className={classes.formControl}>
                                          <InputLabel id="demo-simple-select-helper-label"></InputLabel>
                                          <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            onChange={handleChange}
                                            onClose={handleClose}
                                            anchorEl={anchorEl}
                                            value={anchorEl}
                                            
                                          >
                                            <MenuItem value="pending">Pending</MenuItem>
                                            <MenuItem value="approved">Approved</MenuItem>
                                            <MenuItem value="rejected">Rejected</MenuItem>
                                          </Select>
                                        </FormControl>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
                
                  <Controls.Button
                  type="submit"
                  text="Submit" />
                   <CSVLink data={inputJSON}>Download CSV</CSVLink>
            </Paper>
        </div>
        </main>
    )
}
