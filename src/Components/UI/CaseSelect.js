import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import background from "../../Images/DentistryBackgound.jpg";
import React, { useEffect,useState, Fragment } from 'react';
import { useSelector} from "react-redux";
import './Case.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link} from 'react-router-dom';


function CaseSelect() {
    const {userInfomation} = useSelector((state) => state.user)

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/page1');
      
    };
   console.log(userInfomation.name)
    return (
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
    left:'30%',
    top:'20%',
    fontSize:'70px',
    fontWeight : 'bold'
}}>Case Selection

    </div>
    <div className='cards'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          alt="Case 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Case Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            this is a brief description of the case
          </Typography>
          <Typography>
              <Chip label= 'Select Case' color="primary" size="medium" onClick={handleClick}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
</div>

            </Fragment>
        </div>
    );
}

export default CaseSelect;