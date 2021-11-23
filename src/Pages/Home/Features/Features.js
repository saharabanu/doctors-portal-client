import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import treatment from '../../../images/treatment.png';

const Features = () => {
    const verticalCenter={
        display:'flex',
        alignItems:'center',
        height:400
    }
    return (
        <Container sx={{mt: 5}}>
            <Grid container spacing={0}>
        <Grid item xs={12} md={6} style={{ verticalCenter}}>
          <img style={{width:'300px'}}src={treatment} alt="" />
        </Grid>
        
        <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
        <Box>
        <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 600, m: 2 }}>
        Exceptional Dental <br /> Care, on Your Terms
      </Typography>
      <Typography variant="body1" gutterBottom sx={{my:3, fontSize:13,color:'gray',fontWeight:300, }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Button variant="contained"style={{backgroundColor:'#2EEAD9'}}>Get Appointment</Button>
      </Box>
          </Grid>
        
        
      </Grid>

            
        </Container>
    );
};

export default Features;


  