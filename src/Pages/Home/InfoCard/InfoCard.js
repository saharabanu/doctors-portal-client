import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
// import { infoData } from '../../../data/data';



const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        Icon: AccessTimeIcon,
        background: '#1CC7C1'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        Icon: LocationOnIcon,
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        Icon: WifiCalling3Icon,
        background: '#1CC7C1'
    }
];



const InfoCard = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }) => <Grid key={title} item xs={12} sm={12} md={4} lg={4}>
                        <Paper variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 3 }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography variant="body1">{title}</Typography>
                                <Typography variant="subtitle1">{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;