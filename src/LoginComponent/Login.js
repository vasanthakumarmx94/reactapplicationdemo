import './Login.css'
import { useState } from 'react'



export const Login=()=>{
    let[uname,setUname]=useState("");
    let[pass,setPass]=useState("");
    let[useraName,finalUname]=useState("");
    let[password,finalPass]=useState("");

    let changeUser=(event)=>{
        setUname(event.target.value);

    }
    let changePass=(event)=>{
        setPass(event.target.value);

    }
   function getFinalValues(e){
            e.preventDefault();
            finalUname(uname);
            finalPass(pass);
    
    }
    
    return(
        <section className="mysecstyle">
            <h2>Login Form</h2>
            <form onSubmit={getFinalValues} >
            <label>Enter User Name</label>
            <input type="text" id='uname' name='uname' onChange={changeUser} value={uname} ></input>
            <label>Enter User Name</label>
            <input type="password" id='password' name='password' onChange={changePass} value={pass} ></input>
            <input type="submit" value="Login"></input>
            
            </form>
            <div>
                Username:{useraName}<br></br>
                Password:{password}
            </div>
        </section>
    );
}