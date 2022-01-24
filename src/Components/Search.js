import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { Container } from '@material-ui/core';
import { Button,Box } from '@material-ui/core';

import TextField from '@mui/material/TextField';
function TableBody() {

let { id } = useParams();
//console.log(id);
let myArry = useSelector((state) => state.StudReducer);
//console.log(myArry);
    return (
        <tbody className='studentBody'>
            {
                myArry.map((stu) => {
                    return (stu.studId==id || stu.studName.includes(id.toString()) ?
                        <tr key={stu.studId}>
                    <td>{stu.studId}</td>
                    <td>{stu.studName}</td>
                    <td>{stu.studDepart}</td>
                    <td>{stu.studyear}</td>
                    <td><NavLink to={`/students/delete/${stu.studId}`}><Button variant='contained' color="secondary">DELETE</Button></NavLink></td>
                    <td><NavLink to={`/students/update/${stu.studId}`}><Button variant='contained' color="">UPDATE</Button></NavLink></td>
                </tr>:<span></span>);
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
export function Search(){
    const [title, setTitle] = useState('');

    return (
        <Container>
        <Box>
        <TextField name='searchText' label="Search Here" variant="outlined"  onChange={event => setTitle(event.target.value)} />
        <NavLink to={`/students/search/${title}`}><Button variant='contained' color="primary">SEARCH</Button></NavLink>
        </Box>
        
        <table border="2">
            <TableHead></TableHead>
            <TableBody></TableBody>
        </table>
        </Container>
        
    )
}



