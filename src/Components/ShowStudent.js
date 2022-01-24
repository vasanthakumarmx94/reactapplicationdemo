
//import {useEffect, useState} from 'react';
//import {StudentIntf} from '../StudentData/SudentIntf';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import { Container } from '@material-ui/core';
import { Button,Box } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Search } from './Search';
import './myStyle.css';
function TableBody(){

    let studAr=useSelector((store)=>store.StudReducer);
    
    // let studImpl=new StudentIntf();
    // let[studAr,setArray]=useState([]);
    // useEffect(()=>{
    //     setArray(studImpl.getAllStudents());
    // },[studAr]);

return(
    <tbody className='studentBody'>{
        studAr.map((student)=>{
            return(
                <tr key={student.studId}>
                    <td>{student.studId}</td>
                    <td>{student.studName}</td>
                    <td>{student.studDepart}</td>
                    <td>{student.studyear}</td>
                    <td><NavLink to={`/students/delete/${student.studId}`}><Button variant='contained' color="secondary">DELETE</Button></NavLink></td>
                    <td><NavLink to={`/students/update/${student.studId}`}><Button variant='contained' color="">UPDATE</Button></NavLink></td>
               
                </tr>
            )
        })
    }
    </tbody>
)

}
function TableHead(){
    return(
        <thead className='studentth'>
            <th>STUDENT ID</th>
            <th>STUDENT NAME</th>
            <th>DEPARTMENT</th>
            <th>YEAR </th>
            <th colSpan="2">ACTION </th>
        </thead>
    )
}

export function ShowStudent(){
    const [serchText, setTitle] = useState('');
let searchingflag=false;
let Setflag=(e)=>{
    searchingflag=true;
}


// /students/search/:id
    return (
        <Container>
        <Box>
        <TextField name='searchText' label="Search Here" variant="outlined"  onChange={event => setTitle(event.target.value)} />
        <NavLink to={`/students/search/${serchText}`}><Button variant='contained' onClick={Setflag} color="primary" className='searchbtn'>SEARCH</Button></NavLink>
        </Box>
        <table border="2">
            <TableHead></TableHead>
            {
                searchingflag?<Search serchText={serchText}></Search>
                :<TableBody></TableBody>
            }
        
        </table>
        </Container>
        
    )
}


