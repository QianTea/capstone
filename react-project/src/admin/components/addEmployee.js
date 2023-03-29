import { Link, useParams } from 'react-router-dom'
import Staff from '../pages/Employee';
import React from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//styles
const styles = {

  };
//data
const roles = [
    { value: 'Uncategorized', label: 'Uncategorized', },
    { value: 'Admin', label: 'Admin', },
    { value: 'Manager', label: 'Manager', },
    { value: 'Chef', label: 'Chef', },
    { value: 'Waiter', label: 'Waiter', },
    { value: 'Cashier', label: 'Cashier', },
];


const AddEmployee = () => {

    return (
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}>
            <h1>Add Employee</h1>
            <Box component="form"
                sx={{ mt: 2, mb: 3 }}
                noValidate
                autoComplete="off" >
                <form name="addItem">
                    <div>
                        Name:
                        <TextField
                            id="empName"
                            label="name"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        Email:
                        <TextField
                            id="empEmail"
                            label="email"
                            variant="outlined"
                        />
                    </div>
                    <div >
                        Role:
                        <TextField
                            id="empRole"
                            select
                            label="Role"
                            defaultValue="uncategorized"
                            helperText="Please select employee's role"
                        >
                            {roles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        Password:
                        <TextField
                            id="staffPswd"
                            label="password"
                            variant="outlined"
                            type="password"
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
                    to="/admin/employee">
                    Go back to employee management page
                </Link>
            </Box>
        </Box>
    )
}
export default AddEmployee;