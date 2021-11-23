import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import './Services.css';



const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop:'50px',marginBottom:'50px'}}>
       <Container>
       <Typography  sx={{ color: 'success.main', fontWeight: 500, m: 2}} variant="h4" component="div">
          Our Service
        </Typography>
       <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
         Services We Provide
        </Typography>
           
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service=><Service
              key={service.name}
              service={service}
              
              >

              </Service>)
          }
        </Grid>
       </Container>
      </Box>
    );
};

export default Services;