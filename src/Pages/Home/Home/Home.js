import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <Features></Features>
            <AppointmentBanner></AppointmentBanner>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
            </div>
    );
};

export default Home;