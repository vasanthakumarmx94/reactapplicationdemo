import { Student } from '../StudentData/Student';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { addStudent } from '../actions/studAction';
import { Container, TextField, Box, Button,Card,CardContent,CardMedia,Typography} from '@material-ui/core';
import * as React from 'react';
import './myStyle.css';


export function AddStudent() {

    const [student, setStudent] = useState(new Student());
    const [flag, setFlag] = useState(false);
    const handleUpdation = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    let dispatch = useDispatch();
    let test = (e) => {
        e.preventDefault();
        //console.log(student);
        dispatch(addStudent(student));
        setFlag(true);
    }


    return (
        <Container >
            <div className='addStudentStyle'>
                <div className='myformStyle'>
                    {flag ? <Navigate to="/students/showall" /> :
                        <div>
                            <h2>ADD STUDENT</h2>
                            <form onSubmit={test}>
                                <table>
                                    <Box sx={{ width: 400, maxWidth: '100%', }}>
                                        <TextField fullWidth label="Student Id" id="fullWidth" type="number" name='studId' value={student.studId} onChange={handleUpdation} />
                                    </Box>
                                    <Box sx={{ width: 400, maxWidth: '100%', }}>
                                        <TextField fullWidth label="Student Name" id="fullWidth" type="text" name='studName' value={student.studName} onChange={handleUpdation} />
                                    </Box>
                                    <Box sx={{ width: 400, maxWidth: '100%', }}>
                                        <TextField fullWidth label="Department" id="fullWidth" type="text" name='studDepart' value={student.studDepart} onChange={handleUpdation} />
                                    </Box>
                                    <Box sx={{ width: 400, maxWidth: '100%', }}>
                                        <TextField fullWidth label="Year" id="fullWidth" type="text" name='studyear' value={student.studyear} onChange={handleUpdation} />
                                    </Box>
                                    <Box sx={{ width: 400, maxWidth: '100%', }} mt={3}>
                                        <Button type='submit' variant='contained' color="primary">SUBMIT</Button>
                                        <Button type='reset' variant='contained' color="primary">RESET</Button>
                                    </Box>

                                </table>
                            </form>
                        </div>

                    }
                </div>
                <div className='myformStylelogo'>

                    <Card sx={{ maxWidth: 290 }}>
                        <CardMedia
                            component="img"
                            height="275"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fArpf3Pj_m_4-NoQPb85Uq7orkaMu6uacg&usqp=CAU"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                E-Educate
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            EducationThe essence of Human Resource Development is education,
                            which plays a significant and remedial role in balancing the socio-economic framework of the country. 
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </Container>
    )



}

