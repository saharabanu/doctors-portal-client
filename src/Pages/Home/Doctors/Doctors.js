import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-brushlands-01012.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div style={{marginTop:'50px',marginBottom:'50px'}}>
            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: "center", mb: 2 }}> Our Doctors : {doctors.length}</Typography>

            <Container>
             <Grid container spacing={2}>
               {
                   doctors?.map(doctor=><Doctor
                   key={doctor._id}
                   doctor={doctor}
                   ></Doctor>)
               }
               
                
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;