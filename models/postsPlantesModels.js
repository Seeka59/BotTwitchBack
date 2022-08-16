const mongoose = require("mongoose");
const PostsModelP = mongoose.model(
    "plantes",
    {
        author: {
            type: String,
            required: true
        },
        categorie: {
            type: String,
            required: true
        },
        type: {
            type: String,
            require: true
        }
        ,
        nom: {
            type: String,
            require: true
        }
        ,
        tdp: {
            type: Number,
            require: true
        }
        ,
        climasMin:{
            type: Number,
            require: true
        }
        ,
        climasMax:{
            type: Number,
            require: true
        }
        ,
        hydratation:{
            type: Number,
            require: true
        },
        jrsArrosage:{
            type: Number,
            require: true
        }
        ,
        date: {
            type: Date,
            default: Date.now
        }
    },
    "plante"
);

module.exports = { PostsModelP } ;