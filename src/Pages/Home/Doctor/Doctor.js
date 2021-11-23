import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name,image} = doctor
    return (
        <Grid item xs={12} sm={6} md={4}>
               
               <img style={{width:'200px',height:'200px'}} src={`data:image/png;base64,${image}`} alt="" />  
               <Typography variant="h4" sx={{ fontWeight: 500, textAlign: "center", mb: 2 }}>{name}</Typography>  
        </Grid>
    );
};

export default Doctor;