import {Schema, model} from "mongoose";

export const MovieSchema = new Schema ({
    title: {type: String, required: true},
    director: {type: String, required: true},
    releaseDate: {type: String, required: true},
    imageURL: {type: String, required: true},
    isAvailable: {type: Boolean, required: true}
});

export const MovieModel = model("movie", MovieSchema)