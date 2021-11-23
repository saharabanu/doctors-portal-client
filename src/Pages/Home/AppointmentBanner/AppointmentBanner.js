import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';


const appointmentBg = {
    background:`url(${bg})`,
    backgroundColor:'rgba(45, 58, 74,0.8 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175,

}

const AppointmentBanner = () => {
    return (
        <Box  style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
            <img src={doctor} alt="" 
            style={{width:400,marginTop:'-110px'}}/>
        </Grid>
        <Grid item xs={12} md={6}  sx={{ display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign:'left',
    }}>
         <Box>
         <Typography variant="h6" sx={{mb:5}} style={{color:'#2EEAD9'}}>
             Appiontment
             </Typography>
         <Typography variant="h4" sx={{my:5}} style={{color:'white'}}>
            Make An  Appiontment <br /> Today
             </Typography>
         <Typography variant="h6" style={{color:'white',fontSize:14,fontWeight:300}} >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quam, officiis ipsa optio aut vitae? Provident nesciunt qui nobis eius!
             </Typography>
             <Button sx={{mt:3,mb:2}} style={{backgroundColor:'#2EEAD9'}}variant="contained">Learn More</Button>
         </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;