
import './App.css';
//import {ShowStudent} from './ShowStudentComponent/ShowStudent'
import { ShowStudent } from './Components/ShowStudent';
import { DeleteStudent } from './Components/DeleteStudent';
import { AddStudent } from './Components/AddStudent';
import {UpdateStudent} from './Components/UpdateStudent';
import { Footer } from './FooterComponent/Footer';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBarComponent/NavBar';
import {Login} from './LoginComponent/Login';
import {Contact} from './ContactComponent/Contact';
import {Search} from './Components/Search';
function App() {

  return (
    <div>
      <header className='headerstyle'>
        <NavBar></NavBar>
      </header>
      <div className='mybodystyle'>
        <Routes>
          <Route path="/students/login" element={<Login />}></Route>
          
          <Route path="/students/showall" element={<ShowStudent />}></Route>
          <Route path="/students/delete/:id" element={<DeleteStudent />}></Route>
          <Route path="/students/addStudent" element={<AddStudent />}></Route>
          <Route path="/students/update/:id" element={<UpdateStudent />}></Route>
          <Route path="/students/search/:id" element={<Search />}></Route>
          <Route path="/students/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
