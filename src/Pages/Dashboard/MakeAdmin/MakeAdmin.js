import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] =useState(false);
    const {token} = useAuth();

    const handleOnBlur = e=>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://radiant-brushlands-01012.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width:'50%'}}
             label="Email" 
             type="email"
             onBlur={handleOnBlur}
             variant="standard" />

            <Button type="submit" variant="contained">Make Admin</Button>

            </form>
            {success &&  <Alert severity="success">Congrates!!!  Made Admin  successfully !</Alert>}
        </div>
    );
};

export default MakeAdmin;