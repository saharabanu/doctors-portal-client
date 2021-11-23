import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <NavLink to='/appointment'> <Button  style={{color:'white',textDecoration:'none'}}>Appointment</Button></NavLink>
            {user?.email ?
              <Box>
                <NavLink to='/dashboard'> <Button style={{color:'white',textDecoration:'none'}}>Dashboard</Button></NavLink>

               <Button  onClick={logOut} style={{color:'white'}}>LogOut</Button>
               </Box>
                 :<NavLink style={{color:'white',textDecoration:'none'}} to='/login'> <Button color="inherit">Login</Button></NavLink>}
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;