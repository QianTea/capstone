import React from "react";
import { Link, useParams } from 'react-router-dom'

import Staff from '../pages/Employee';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const AddRole = () => {

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}>
            <h1>Add Role</h1>
            <Box component="form"
                sx={{ mt: 2, mb: 3 }}
                noValidate
                autoComplete="off" >
                <form name="addItem">
                    <div>
                        name:
                        <TextField
                            id="roleName"
                            label="name"
                            variant="outlined"
                        />
                    </div>

                    <div>
                        description:
                        <TextField
                            id="roleDescription"
                            label="description"
                            variant="outlined"
                        />
                    </div>
                    <Button fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<SendIcon />}
                        color="success">
                        Submit
                    </Button>
                </form>

                <Link
                    variant="body2"
                    to="/admin/staff">
                    Go back to Staff
                </Link>
            </Box>
        </Box>
    )
}
export default AddRole;