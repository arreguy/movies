import express from "express";
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/movies")
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(error => console.error(error)); 

const app = express(); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});