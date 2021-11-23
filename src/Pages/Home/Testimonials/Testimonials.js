import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';



const testimonials =[
    {
        id:'01',
        name: 'Wilson Herry',
        img: people1,
        
        address:'California',
        
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio corrupti impedit quia excepturi praesentium doloremque facilis placeat deserunt quis, sequi aperiam, saepe repellendus quos iste minus! Accusamus, earum mollitia?'
        

    },
    {
        id:'02',
        name: 'Wilson Herry',
        img: people2,
        
        address:'California',
        
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio corrupti impedit quia excepturi praesentium doloremque facilis placeat deserunt quis, sequi aperiam, saepe repellendus quos iste minus! Accusamus, earum mollitia?'
        

    },
    {
        id:'03',
        name: 'Wilson Herry',
        img: people3,
        
        address:'California',
        
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio corrupti impedit quia excepturi praesentium doloremque facilis placeat deserunt quis, sequi aperiam, saepe repellendus quos iste minus! Accusamus, earum mollitia?'
        

    }
]

const Testimonials = () => {
    return (
        < Container sx={{mt:5}}>
        <div style={{dispaly:'flex',textAlign:'left'}}>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 400,  color: 'info.main'}}>
        Testoimonials
      </Typography>
        <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 600}}>
        What's Our Patients <br />Says
      </Typography>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {
              testimonials.map(testimonial=><Grid item xs={4} sm={4} md={4} key={testimonial.id}>
                   <CardContent sx={{ boxShadow: 3 }}>
                   <Typography variant="body2" sx={{ fontSize:13,color:'gray',fontWeight:300, mb:5}}>
                   
                    {testimonial.description}
                    </Typography>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',mt:5}}>
                   <CardMedia
                   style={{width:'25%'}}
                   sx={{  borderRadius: '100%' }}
                    component="img"
                    height="140"
                    image={testimonial.img}
                    alt=""
                />
                  <div style={{px:3}}>
                  <Typography variant="h5" sx={{ mb: 1.5, color: 'info.main',ml:3 }} >
                           {testimonial.name}
                        </Typography>
                   <Typography variant="h6" sx={{mb: 1.5  }} >
                           {testimonial.address}
                        </Typography>
                  </div>
                   </div>
                   </CardContent>
                  
         
                </Grid>)
          }
        
        
      </Grid>
        </ Container>
    );
};

export default Testimonials;