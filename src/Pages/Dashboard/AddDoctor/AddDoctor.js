import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [image,setImage] = useState(null);

    const handleSubmit = e=>{
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        
        fetch('https://radiant-brushlands-01012.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               alert('Doctors Added Successfully')
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });   
    }
    return (
        <div>
            <h3> Add A Doctor</h3>
            <form onSubmit={handleSubmit}>
            <TextField
            sx={{width: '50%'}}
            label="Name"
            onChange = {e=> setName(e.target.value)}
            required
            variant="standard" />
            <br />
            <TextField
            sx={{width: '50%'}}
            label="Email"
            type="email"
            onChange = {e=> setEmail(e.target.value)}
            required
            variant="standard" />
            <br />
            <Input 
            sx={{width: '50%'}} 
            accept="image/*"
             type="file"
             onChange = {e=> setImage(e.target.files[0])}/>
            
            <br />
            <br />
            <Button variant="contained" type="submit">
             ADD Doctor
            </Button>
            </form>
        </div>
    );
};

export default AddDoctor;