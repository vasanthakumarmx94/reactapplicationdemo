

import { useDispatch } from "react-redux";
import {Navigate, useParams} from 'react-router-dom';
import { useEffect } from "react";
import {delStudent} from '../actions/studAction';



export function DeleteStudent(){


    let {id}=useParams();
    let dispatch=useDispatch();

    useEffect(()=>{
        dispatch(delStudent(parseInt(id)));
    },[])
    return(
        <>
            <Navigate to ="/students/showall"></Navigate>
        </>
    )
}