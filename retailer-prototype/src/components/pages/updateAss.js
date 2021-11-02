import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import InputLabel from '@material-ui/core/InputLabel';
//import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import Fade from '@material-ui/core/Fade';
//import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Search } from "@material-ui/icons";
import Controls from "../../controls/Controls";
import {Toolbar, InputAdornment } from '@material-ui/core';
import {CSVLink, CSVDownload} from "react-csv";
//import Paper from '@mui/material/Paper';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Button from '@restart/ui/esm/Button';




const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
      searchInput: {
        width: '75%'
    }
  });

  
const useStyles = makeStyles({})
  /*formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));*/


function createData(name, retailer, brand, date, position, price) {
    return {
      name,
      retailer,
      brand,
      date,
      position,
      price,
      status: [
        { date: '2020-01-05', },
      ],
    };
}

function Row(props) {
    const { row } = props
      alert(JSON.stringify(props));
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    const [anchorEl, setAnchorEl] = React.useState('');
    const [filterFn, setFilterFn] = useState({ fn: rows => { return rows; } })
    const Open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleChange = (event) =>{
        setAnchorEl(event.target.value);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

   /* const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: rows => {
              if (target.value == "")
                  return rows;
              else
                  return rows.filter(x => x.fullName.toLowerCase().includes(target.value))
          }
      })
   }*/

  
  
    return (

      <React.Fragment>
        <TableRow className={classes.formControl}>
          
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.retailer}</TableCell>
          <TableCell align="right">{row.brand}</TableCell>
          <TableCell align="right">{row.date}</TableCell>
          <TableCell align="right">{row.position}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Status
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Update</TableCell>
                      <TableCell align="right">Total price (R)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.status.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell align="right">{historyRow.update}
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
                            <MenuItem value="cfvcnvb">Pending</MenuItem>
                            <MenuItem value="bbsx">Approved</MenuItem>
                            <MenuItem value="kjnsdjs">Rejected</MenuItem>
                          </Select>
                         </FormControl>
                        </TableCell>
                        <TableCell align="right">{historyRow.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      retailer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      status: PropTypes.arrayOf(
        PropTypes.shape({
          update: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  const rows = [
    createData('paulmoloko@gmail.com', 'BMW', 'Royce Rolls', '2022-02-02', 'ICT', 500),
    createData('kat@hotmail.com', 'Digital Academy', 'ICT', '2021-11-12', 'Team Lead', 1000),
    createData('nokzwane@gmail.com', 'Google', 'Engineering & Technology', '2022-02-14', 'Junior Dev', 700),
    createData('osego@hotmail.com', 'Microsoft', 'Engineering', '2022-01-13', 'DevOps Engineer', 1200),
    createData('ratau@gmail.com', 'Microsoft', 'Engineering','2021-12-1', 'Cloud Engineer', 900),
  ];
  
  export default function CollapsibleTable() {
    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({ fn: rows => { return rows; } })
    const [isLoaded, setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);
  
    const [error, setError] = useState(null);

    useEffect(() => {
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

      const JSONToCSVConvertor = (JSONData, ReportTitle, ShowLabel) => {
        //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
        var arrData =
          typeof JSONData !== "object" ? JSON.parse(JSONData) : JSONData;
    
        var CSV = "";
    
        
        if (ShowLabel) {
          var row = "";
    
    
          for (var index in arrData[0]) {
          
            row += index + ",";
          }
    
          row = row.slice(0, -1);
    
      
          CSV += row + "\r\n";
        }
    
        //1st loop is to extract each row
        for (var i = 0; i < arrData.length; i++) {
          var row = "";
    
          //2nd loop will extract each column and convert it in string comma-seprated
          for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
          }
    
          row.slice(0, row.length - 1);
    
          
          CSV += row + "\r\n";
        }
    
        if (CSV === "") {
          alert("Invalid data");
          return;
        }
    
    
        var fileName = "MyReport_";
        
        fileName += ReportTitle.replace(/ /g, "_");
    
        //Initialize file format you want csv or xls
        var uri = "data:text/csv;charset=utf-8," + escape(CSV);
    
        //this will generate a temp <a /> tag
        var link = document.createElement("a");
        link.href = uri;
    
        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
    
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
      const inputJSON = items;
      console.log("inputJSON",inputJSON);

    const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: rows => {
              if (target.value == "")
                  return rows;
              else
                  return rows.filter(x => x.fullName.toLowerCase().includes(target.value))
          }
      })
  }
    
    return (
    <Paper>
      <TableContainer component={Paper}>
        <Toolbar>
          <Controls.Input
              label="Search"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleSearch}
          />
        </Toolbar>
        <Table aria-label="updateRequest table">
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell>CandidateInfo </TableCell>
              <TableCell align="right">Retailer</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <CSVLink data={inputJSON}>Download CSV</CSVLink>
      </Paper>
    );
  }