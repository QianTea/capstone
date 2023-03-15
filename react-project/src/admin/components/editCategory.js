import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";

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
const categories = [
    { id: 1, name: "Uncategorized", description: "Uncategorized" },
    { id: 2, name: "2pcDinner", description: "2pc Fish and Chip Dinners" },
    { id: 3, name: "2pcOnly", description: "2pc Fish Only" },
    { id: 4, name: "family", description: "Family Packs" },
    { id: 5, name: "sfp", description: "Sea Food Platter" },
    { id: 6, name: "fries", description: "Homemade Fries" },
    { id: 7, name: "lunch", description: "Homemade Fries" },
    { id: 8, name: "shrimpSpecial", description: "Shrimp Special" },
    { id: 9, name: "kid", description: "Kid's Combo" },
    { id: 10, name: "side", description: "Side Orders" },
    { id: 11, name: "beverage", description: "Beverages" },
];

const EditCategory = () => {
    const { id } = useParams();
    const category = categories.find((category) => category.id === 1);
    const [name, setName] = React.useState(category ? category.name : "");
    const [description, setDescription] = React.useState(
        category ? category.description : ""
    );
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit logic here
        console.log("Category updated: ", { name, description });
        navigate("/admin/menu/categories");
    };

    if (!category) {
        return <div>Category not found</div>;
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
                <Typography variant="h4">Edit Category</Typography>
                <Box component="form" sx={{ mt: 2, mb: 3 }} onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            id="categoryName"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            id="categoryDescription"
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
                        Update Category
                    </Button>
                    <Link to="/admin/menu/categories">
                        Go back to categories management page
                    </Link>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default EditCategory;
