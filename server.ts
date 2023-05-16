import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import movieRouter from "./routes/movie.routes";

mongoose.connect("mongodb://127.0.0.1:27017/movies")
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(error => console.error(error)); 

const app = express(); 

app.use(express.json());
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.use('/movies', movieRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}.`);
});