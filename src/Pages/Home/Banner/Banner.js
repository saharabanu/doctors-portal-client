import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';


const appointMentBanner={
    background:`url(${bg})`,
    
}  
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:400
}


const Banner = () => {
    return (
        <Container style={appointMentBanner} sx={{ flexGrow:1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
          <Box>
          <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
        Your New Smile <br /> Starts Here
        </Typography>
          <Typography sx={{my:3, fontSize:13,color:'gray',fontWeight:300, }} variant="h6" component="div">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, impedit. Officiis totam, maxime beatae iste consectetur mollitia excepturi quod blanditiis?
        
        </Typography>
        <Button variant="contained"style={{backgroundColor:'#2EEAD9'}}>Get Appointment</Button>
          </Box>
        

        
        

           
          </Grid>
          <Grid item xs={12} md={6}  style={verticalCenter}>
            <img  style={{width:"400px"}} src={chair} alt="" />
          </Grid>
          
          
        </Grid>
      </Container>
    );
};

export default Banner;