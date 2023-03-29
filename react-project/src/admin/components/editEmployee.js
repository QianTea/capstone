import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// styles
const mdTheme = createTheme();
const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
    },
    button: {
        marginTop: "20px",
    },
};

// data
const employees = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Manager",
        password: "password123",
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@example.com",
        role: "Waiter",
        password: "password456",
    },
    {
        id: 3,
        name: "Bob Smith",
        email: "bobsmith@example.com",
        role: "Cashier",
        password: "password789",
    },
];

const EditEmployee = () => {
    const { id } = useParams();
    const employee = employees.find((employee) => employee.id === 1);
    const [name, setName] = React.useState(employee ? employee.name : "");
    const [email, setEmail] = React.useState(employee ? employee.email : "");
    const [role, setRole] = React.useState(employee ? employee.role : "");
    const [password, setPassword] = React.useState(employee ? employee.password : "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit logic here
        console.log("Employee updated: ", { name, email, role, password });
        navigate("/admin/employee");
    };

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box
                sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
            >
                <h1>Edit Employee</h1>
                <Box component="form" sx={{ mt: 2, mb: 3 }} onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="employeeName"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="employeeEmail"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="employeeRole"
                            label="Role"
                            variant="outlined"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="employeePassword"
                            label="Password"
                            variant="outlined"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        startIcon={<SendIcon />}
                        color="success"
                        type="submit"
                    >
                        Update Employee
                    </Button>
                    <Link to="/admin/employee">Go back to employee management page</Link>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default EditEmployee;
