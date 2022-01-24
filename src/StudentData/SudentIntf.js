

import { Student } from "./Student";



export class StudentIntf {
    studArray =new Set();
    constructor(){
        this.studArray.add(new Student(100, 'vasu', 'CSE', 'SE'));
        this.studArray.add(new Student(101, 'Raghu', 'IT', 'FE'));
        this.studArray.add(new Student(103, 'Bhuvan', 'MCA', 'TE'));
    }
        
    // getAllStudents() {
    //     //console.log(this.studArray);
    //     return [...this.studArray];
    // }
    addStudent(student) {
        console.log("******addstudent*******");
        let stud=new Student(student.studId,student.studName,student.studDepart,student.studyear);
        
        this.studArray.add(stud);
        return [...this.studArray];
    }
    searchStudent(stdId){
        console.log("******Searchstudent*******");
            return [...this.studArray].find((student)=>student.studId==stdId);
    }

    deleteStudent(stdId){
        console.log("******deletestudent*******");
        let student=this.searchStudent(stdId);
        this.studArray.delete(student);
        //console.log(this.studArray);
        return [...this.studArray];
    }

    updateStudent(student){
        console.log("******UpdateStudent*******");
        this.deleteStudent(parseInt(student.studId));
        //console.log(this.studArray);
        let stud=new Student(student.studId,student.studName,student.studDepart,student.studyear);
        this.studArray.add(stud);
        return [...this.studArray];
    }




}