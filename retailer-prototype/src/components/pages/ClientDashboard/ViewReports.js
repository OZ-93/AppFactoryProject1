import React, { useState } from 'react'

import PageHeader from "../../../controls/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../../controls/useTable";
import * as employeeService from "../ClientDashboard/BookingService";
import Controls from "../../../controls/Controls";
import { Search } from "@material-ui/icons";

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
    { id: 'PositionId', label: 'Candidate Position', disableSorting: true },
    { id: 'CandidateBrand', label: 'Candidate Brand', disableSorting: true },
    { id: 'hireDate', label:'Date'},
]

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

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

    return (
        <main>
        <div>
            
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
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
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.IdNumber}</TableCell>
                                    <TableCell>{item.Email}</TableCell>
                                    <TableCell>{item.contactNo}</TableCell>
                                    <TableCell>{item.RetailerName}</TableCell>
                                    <TableCell>{item.ShotrtListedPosition}</TableCell>
                                    <TableCell>{item.BranchName}</TableCell>
                                    <TableCell>{item.hireDate}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </div>
        </main>
    )
}
