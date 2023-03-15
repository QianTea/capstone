import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

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

//data
const tags = [
  { id: 1, name:'TakeOutMenu', description:'Menu for Take Out Order and Phone Order'},
  { id: 2, name:'Dine-In Menu', description:'Menu for Dine-In Order'},
  { id: 3, name: 'Fish', description: 'Fish dishes' },
  { id: 4, name: 'Sides', description: 'Side dishes' },
  { id: 5, name: 'Beverage', description: 'Beverages' },
  { id: 6, name: 'Special', description: 'Specialty dishes' },
];

const EditTag = () => {
  const { tagId } = useParams();
  const tag = tags.find((tag) => tag.id === 1);
  const [name, setName] = useState(tag ? tag.name : "");
  const [description, setDescription] = useState(tag ? tag.description : "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit logic here
    console.log("Tag updated: ", { name, description });
    navigate("/admin/menu");
  };

  if (!tag) {
    return <div>Tag not found</div>;
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
        <h1>Edit Tag</h1>
        <Box component="form" sx={{ mt: 2, mb: 3 }} onSubmit={handleSubmit}>
          <div>
            <TextField
              id="tagName"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="tagDescription"
              label="Description"
              variant="outlined"
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
            Update Tag
          </Button>
          <Link to="/admin/menu">Go back to food tags management page</Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EditTag;
