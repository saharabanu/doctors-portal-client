import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData,setLoginData] = useState({});

    const {user,loginUser,signinWithGoogle,isLoading,authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] =value;
        
        setLoginData(newLoginData)
    }
    const handleSubmitLogin = e =>{
        e.preventDefault()
        loginUser(loginData.email, loginData.password,history,location)

       
    }
    const handleGoogleSignin = ()=>{
        
        signinWithGoogle(location,history)

    }
    return (
        <Container>
           <Grid container spacing={2}>
        <Grid sx={{mt:8}} item xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
            Login
      </Typography>
      { !isLoading &&
          <form onSubmit={handleSubmitLogin}>

      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="Your Email"
      name="email"
      onChange={handleOnChange}
      type=" email"
      variant="standard" />

      <TextField 
      sx={{width:'75%',m:1}}
      id="standard-basic" 
      label="Your Password"
      name="password"
      onChange={handleOnChange}
      type="password" 
      variant="standard" />

      

      <Button 
      sx={{width:'75%',m:1}}
      type ="submit"
      variant="contained">
          Login
          </Button>
          <NavLink style={{textDecoration:'none'}} to='/register'>
      <Button variant="text">Are You New User? Please Register</Button>
      </NavLink>

      </form>}
        <p>-------------------------------</p>
        <Button onClick={handleGoogleSignin} variant="contained">Google Signin</Button>

      
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

export default Login;