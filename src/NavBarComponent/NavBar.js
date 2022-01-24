
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { CssBaseline, ButtonGroup } from '@material-ui/core';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

export function NavBar() {


    return (
        <nav>
        <CssBaseline></CssBaseline>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h5'>
                        Student Management System
                    </Typography>
                    <Box ml={5} mr={5}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" margin-left="40px">
                            <Box ml={2} mr={5} mt={2} mb={1}><Button variant="contained"><NavLink to="#" className="linksstyle">Home</NavLink></Button></Box>
                            <Box ml={2} mr={5} mt={2} mb={1}><Button variant="contained"><NavLink to="/students/showall" className="linksstyle">SHOW STUDENT</NavLink></Button></Box>
                            <Box ml={2} mr={5} mt={2} mb={1}><Button variant="contained"><NavLink to="/students/addStudent" className="linksstyle">ADD STUDENT</NavLink></Button></Box>
                            
                            <Box ml={2} mr={5} mt={2} mb={1}><Button variant="contained"><NavLink to="/students/Contact" className="linksstyle">Contact Us</NavLink></Button></Box>
                            <Box ml={2} mr={5} mt={2} mb={1}><Button variant="contained"><NavLink to="#" className="linksstyle">Profile</NavLink></Button></Box>

                        </ButtonGroup></Box>
                </Toolbar>
            </AppBar>     
           
        </nav>
    )
}
