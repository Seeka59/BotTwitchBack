const mongoose = require('mongoose');
const PostsModelTwitchUsers = mongoose.model(
    "twitch",
    {
        channel: {
            type: String,
            required: true
        },
        serveur: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        nbrCo: {
            type: Number,
            required: true
        },
        nbrMsg: {
            type: Number,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "twitch"
);

module.exports = { PostsModelTwitchUsers };