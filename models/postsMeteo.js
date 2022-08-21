const mongoose = require('mongoose');
const PostsModelMeteo = mongoose.model(
    "meteo",
    {
        author:{
            type : String,
            required : true
        },
        ville:{
            type : String,
            required : true
        },
        temperature: {
            type : Number,
            required : true
        },
        humiditer: {
            type : Number,
            required : true
        },
        pression: {
            type : Number,
            required : false
        },
        visibiliter:{
            type : String,
            required : false
        },
        vent:{
            type : String,
            required:false
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "meteo"
);
module.exports = {PostsModelMeteo};