import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Home from './components/Home';
import Bloglist from "./components/Bloglist";
import Blogdetail from "./components/Blogdetail";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 

const App = () => {
    return (
        <Router> 
            <Routes> 
                <Route path="/" element={<Login/>}></Route> 
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/bloglist" element={<Bloglist/>}></Route> 
                <Route path='/blogdetail/:id' element={<Blogdetail/>}></Route>  
              </Routes>  
       </Router>
      );
};

export default App;