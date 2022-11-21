import React, { useEffect,useState, Fragment } from 'react'
import { useSelector} from "react-redux";
import './Navbar.css'
import background from "../../Images/DentistryBackgound.jpg";
import Chip from '@mui/material/Chip';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

function Navbar(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/case');
    
  };

   const {userInfomation} = useSelector((state) => state.user)
   console.log(userInfomation.name)

    return(
<div>
  <Fragment>
  <div className ="app" style={{
            backgroundImage: `url(${background})`,
            height:'120vh',
            marginTop:'0px',
            fontSize:'50px',
            backgroundSize: 'cover',
            }}>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" style={{
      fontSize: ' 20px',
    }}href="#">Hi {userInfomation.name}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" style={{
      fontSize: ' 20px',
    }} >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Previous Feedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
     
        
      </ul>
    </div>
  </div>
  </nav>
  <div style={{position:'absolute',
    left:'65%',
    top:'40%',
    fontSize:'70px',
    fontWeight : 'bold'
}}>
  <Chip label="Get Started" color="primary" fontSize="20px" size="medium" top="100px" onClick={handleClick}/>
  </div>
</div>
</Fragment>
</div>
    )
}
export default Navbar;