


export const delStudent=(stdId)=>{
return{
    type:'DELETESTUDENTS',
    payload:stdId
}
}

export const addStudent=(student)=>{
    return{
        type:'ADDSTUDENTS',
        payload:student
    }
    }

export const updateStudent=(student)=>{
        return{
            type:'UPDATESTUDENT',
            payload:student
        }
        }

 