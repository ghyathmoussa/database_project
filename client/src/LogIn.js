import React from 'react'
import { TextField,Box } from '@mui/material';
import { margin } from '@mui/system';

const LogIn = () => {
    return (
        <div>
            <Box
                sx={{
                    m:1,
                    width:'25ch',
                    margin:'5px auto',
                    background:'#FFC600',
                      
                }}
            >
                <TextField
                id="email"
                label="Email"
                variant="standard"
                style={{
                    margin:'10px',
                    color:'#f0f0f0'
                }}
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                style={{
                    margin:'10px',
                    color:'#f0f0f0'
                }}
            />
            </Box>
        </div>
    );
}

export default LogIn;