import express from "express";
import mongoose from "mongoose";

const movieRouter = express();

movieRouter.post('/', async (req, res) => {
    try {
        

    } catch (error) {
        res.status(500).json({ message: "Aconteceu um erro." });
    }
});