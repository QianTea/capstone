import { Link, useParams } from 'react-router-dom'
import Staff from './staff';
import React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const positions = [
    { value: 'Uncategorized', label: 'Uncategorized', },
    { value: 'kitchen', label: 'kitchen', },
    { value: 'waiter', label: 'waiter', }
];


const AddStaff = () => {

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}>
            <h1>Add Staff</h1>
            <Box component="form"
                sx={{ mt: 2, mb: 3 }}
                noValidate
                autoComplete="off" >
                <form name="addItem">
                    <div>
                        name:
                        <TextField
                            id="staffName"
                            label="name"
                            variant="outlined"
                        />
                    </div>

                    <div>
                        position:
                        <TextField
                            id="outlined-select-position"
                            select
                            label="Select"
                            defaultValue="uncategorized"
                            helperText="Please select staff position"
                        >
                            {positions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                    <div>
                        login password:
                        <TextField
                            id="staffPswd"
                            label="password"
                            variant="outlined"
                        />
                    </div>
                    {/* <button type="submit">submit</button> */}
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
                    Go back to Staff Management page
                </Link>
            </Box>
        </Box>
    )
}
export default AddStaff;