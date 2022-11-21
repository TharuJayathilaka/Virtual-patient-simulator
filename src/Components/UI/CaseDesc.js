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
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    label: {
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
    },
  });
  
  

function CaseDesc() {
    const {userInfomation} = useSelector((state) => state.user)
    const classes = useStyles();
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
    left:'40%',
    top:'20%',
    fontSize:'70px',
    fontWeight : 'bold'
}}>Case 1

    </div>
    <div className='cards'>
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          alt="Case Description"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Case Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            this is the description of the case
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className="cardsd">
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        
        <CardContent>
           
        <Typography className="dropdown">
    <Box sx={{ minWidth: 30}}>
      <FormControl>
        <InputLabel className= {classes.label} variant='standard' htmlFor='uncontrolled-native' >
          Ship to 
        </InputLabel>
        <NativeSelect color='error'
          inputProps={{
            name: 'countries',
            id: 'uncontrolled-native',
            
          }}
        >
          <option>History of the presenting complaint</option>
          <option>Medical history</option>
          <option>Habits</option>
          <option>Plaque control</option>
          <option>Previous dental treatments</option>
          <option>Social history</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </Typography>
        <Typography className="dropdown">
    <Box sx={{ minWidth: 30}}>
      <FormControl>
        <InputLabel className= {classes.label} variant='standard' htmlFor='uncontrolled-native' >
          Ship to 
        </InputLabel>
        <NativeSelect color='error'
          inputProps={{
            name: 'countries',
            id: 'uncontrolled-native',
            
          }}
        >
          <option>Question 1</option>
          <option>Question 2</option>
          <option>Question 3</option>
          <option>Question 4</option>
          <option>Question 5</option>
          <option>Question 6</option>
          <option>Question 7</option>
          <option>Question 8</option>
          <option>Question 9</option>
          <option>Question 10</option>
        </NativeSelect>
      </FormControl>
    </Box>
    </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
    <Typography className="NextChip">
              <Chip className="chips" label= 'Examination and Investigation' color="primary" size="medium" onClick={handleClick}/>
          </Typography>
</div>

            </Fragment>
        </div>
    );
}

export default CaseDesc;