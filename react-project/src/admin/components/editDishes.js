import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';

// data
const dishes = [
    {
        name: '2pc Wihtefish & chips',
        alterName: 'W/C',
        dineInPrice: '10.19',
        takeoutPrice: '10.19',
        category: [{
            "_id": "3456789012",
            "name": "2pc Fish & Chips",
            "description": "2 pieces fish with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc Cod & chips',
        alterName: 'Cod/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces cod with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc haddock & chips',
        alterName: 'HD/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces haddock with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '2pc Halibut & chips',
        alterName: 'HB/C',
        dineInPrice: '11.99',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678902",
            "name": "2pc Fish and Chip Dinners",
            "description": "2 pieces halibut with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678901",
            "name": "Fish",
            "description": "Fish dishes"
        }]
    },
    {
        name: '8pc Shrimps & Chips',
        alterName: '11.49',
        dineInPrice: '11.49',
        takeoutPrice: '10.19',
        category: [{
            "_id": "2345678903",
            "name": "Shrimp Special",
            "description": "8 pieces shrimps with 1 pack homemade fries"
        }],
        tags: [{
            "_id": "2345678902",
            "name": "Special",
            "description": "Specialty dishes"
        }, {
            "_id": "2345678903",
            "name": "Sides",
            "description": "Side dishes"
        }]
    }
];

// styles
const mdTheme = createTheme();
const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
    },
    textField: {
        width: "100%",
        marginBottom: "20px",
    },
    button: {
        marginTop: "20px",
    },
    deleteButton: {
        marginTop: "20px",
        color: "#FF0000",
    },
};
const EditDish = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // find the dish to edit
    const dish = dishes.find((dish) => dish.name === 1);

    // state variables for form values
    const [name, setName] = useState(dish.name);
    const [alterName, setAlterName] = useState(dish.alterName);
    const [dineInPrice, setDineInPrice] = useState(dish.dineInPrice);
    const [takeoutPrice, setTakeoutPrice] = useState(dish.takeoutPrice);

    // submit form handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // update the dish
        const updatedDish = {
            name: name,
            alterName: alterName,
            dineInPrice: dineInPrice,
            takeoutPrice: takeoutPrice,
            category: dish.category,
            tags: dish.tags,
        };
        // replace the old dish with the updated one
        const updatedDishes = dishes.map((dish) =>
            dish.name === id ? updatedDish : dish
        );
        console.log(updatedDishes);
        // navigate back to the dishes page
        navigate("/admin/menu/dishes");
    };

    // delete dish handler
    const handleDelete = () => {
        // remove the dish from the dishes list
        const updatedDishes = dishes.filter((dish) => dish.name !== id);
        console.log(updatedDishes);
        // navigate back to the dishes page
        navigate("/admin/menu/dishes");
    };

    return (
        <Box
            component="form"
            sx={styles.form}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
        >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Paper elevation={3} style={{ padding: "20px", width: "50%" }}>
                    <Typography variant="h4">Edit Dish</Typography>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        sx={styles.textField}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="alterName"
                        label="Alternate Name"
                        variant="outlined"
                        sx={styles.textField}
                        value={alterName}
                        onChange={(e) => setAlterName(e.target.value)}
                    />
                    <TextField
                        id="dineInPrice"
                        label="Dine-In Price"
                        variant="outlined"
                        sx={styles.textField}
                        value={dineInPrice}
                        onChange={(e) => setDineInPrice(e.target.value)}
                    />
                    <TextField
                        id="takeoutPrice"
                        label="Take-Out Price"
                        variant="outlined"
                        sx={styles.textField}
                        value={takeoutPrice}
                        onChange={(e) => setTakeoutPrice(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        sx={styles.button}
                        startIcon={<SendIcon />}
                        type="submit"
                    >
                        Update Dish
                    </Button>
                    <Button
                        variant="outlined"
                        sx={styles.deleteButton}
                        onClick={handleDelete}
                    >
                        Delete Dish
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default EditDish;
