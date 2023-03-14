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
const roles = [
  {
    id: 1,
    name: "Admin",
    description: "The system administrator, with the highest level of permissions.",
  },
  {
    id: 2,
    name: "Manager",
    description: "The restaurant manager, responsible for managing the daily operations of the restaurant.",
  },
  {
    id: 3,
    name: "Chef",
    description: "The chef, responsible for cooking in the restaurant.",
  },
  {
    id: 4,
    name: "Waiter",
    description: "The waiter, responsible for providing service and taking orders for customers.",
  },
  {
    id: 5,
    name: "Cashier",
    description: "The cashier, responsible for handling the restaurant's cash transactions.",
  },
];

const EditRole = () => {
  const { id } = useParams();
  const role = roles.find((role) => role.id === 1);
  const [name, setName] = React.useState(role ? role.name : "");
  const [description, setDescription] = React.useState(role ? role.description : "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit logic here
    console.log("Role updated: ", { name, description });
    navigate("/admin/employee");
  };

  if (!role) {
    return <div>Role not found</div>;
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
        <h1>Edit Role</h1>
        <Box component="form" sx={{ mt: 2, mb: 3 }} onSubmit={handleSubmit}>
          <div>
            <TextField
              id="roleName"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="roleDescription"
              label="Description"
              variant="outlined"
              multiline
              minRows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            Update Role
          </Button>
          <Link to="/admin/employee">Go back to employee management page</Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EditRole;
