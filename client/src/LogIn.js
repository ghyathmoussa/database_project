import React,{useState} from 'react'
import {Button,TextField,Grid,Paper,AppBar,Typography,Toolbar,Link,Box} from "@material-ui/core";
import {Form} from 'react-bootstrap'

const LogIn = () => {
    const [info,setInfo] = useState({
        email:'',
        password:''
    })
    const [logged,setLogged] = useState(false)
    return (
        <div>
            <Form>
                <Box
                    sx={{
                        m: 1,
                        width: '400px',
                        height: '400px',
                        margin: '5px auto',
                        background: '#FFC600',
                        display: 'flix',
                        justifyContent: 'column',
                        alignItems: 'center',
                        padding: '20px',
                    }}
                >
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        style={{
                            margin: '10px',
                            color: '#f0f0f0',
                            width: '90%',
                        }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        style={{
                            margin: '10px',
                            color: '#f0f0f0',
                            width: '90%',
                        }}
                    />
                </Box>
            </Form>
        </div>
    );
}

export default LogIn;