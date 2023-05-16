import express from "express";
import { MovieModel } from "../models/movie.model";

const movieRouter = express.Router();

movieRouter.get('/', async (req, res) => {
    try {
        MovieModel.find({})
        .then(movies => res.send(movies))
    } catch (err) {
        console.error(err.message);
        res.status(500).send("An error happened.");
      }
    }); 

movieRouter.post('/', async (req, res) => {
    try {
        const movie = new MovieModel ({
            title: req.body.title,
            director: req.body.director,
            releaseDate: req.body.releaseDate,
            imageURL: req.body.imageURL,
            isAvailable: req.body.isAvailable
        });

        console.log(movie);

        movie.save()
            .then(savedMovie => res.send(savedMovie))
    } catch (err) {
        console.error(err.message);
        res.status(500).send("An error happened.");
    }
  });

  movieRouter.put('/:id', async (req, res) => {
    try {
      const movie = await MovieModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(movie);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("An error happened.");
    }
  });
  
  movieRouter.delete('/:id', async (req, res) => {
    try {
      const movie = await MovieModel.findByIdAndDelete(req.params.id);
      res.json(movie);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("An error happened.");
    }
  });
  
  export default movieRouter;
  