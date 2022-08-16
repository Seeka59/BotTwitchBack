const mongoose = require('mongoose');
const PostsModelTwitchUsers = mongoose.model(
    "twitch",
    {
        author: {
            type: String,
            require: true
        },
        nbrCo: {
            type: Number,
            require: true
        },
        nbrMsg: {
            type: Number,
            require: true
        },
        points: {
            type: Number,
            require: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "twitch"
);

module.exports = { PostsModelTwitchUsers };