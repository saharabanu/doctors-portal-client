import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();

    const {user,registerUser,isLoading,authError} = useAuth()

    const handleOnBlur = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] =value;
        
        setLoginData(newLoginData)
    }
    const handleSubmitLogin = e =>{
        e.preventDefault()
        if(loginData.password !== loginData.password2){
            alert("Your Password don't match")
            return 
        }
        registerUser(loginData.email, loginData.password,loginData.name,history);


       
    }
    return (
        <Container>
           <Grid container spacing={2}>
        <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
            Register
      </Typography>
      {!isLoading &&
          <form onSubmit={handleSubmitLogin}>
      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="Your Name"
      name="name"
      onBlur={handleOnBlur}
      type=" text"
      variant="standard" />
      
      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="Your Email"
      name="email"
      onBlur={handleOnBlur}
      type=" email"
      variant="standard" />

      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="Your Password"
      name="password"
      onBlur={handleOnBlur}
      type="password" 
      variant="standard" />
      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="ReType Your Password"
      name="password2"
      onBlur={handleOnBlur}
      type="password" 
      variant="standard" />

      

      <Button 
      sx={{width:'75%',m:1}}
      type ="submit"
      variant="contained">
          Register
          </Button>
          <NavLink style={{textDecoration:'none'}} to='/login'>
      <Button variant="text">Already Registerd ? Please Login</Button>
      </NavLink>

      </form>}
      {isLoading && <CircularProgress />}
      {user?.email &&  <Alert severity="success">Congrates!!!  User Create successfully !</Alert>}

      {authError && <Alert severity="error">{authError}</Alert>}
          
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width:'100%'}}src={login}alt="" />
        </Grid>
       
      </Grid>
        </Container>
    );
};

export default Register;