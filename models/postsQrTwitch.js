const mongoose = require('mongoose');
const PostsModelQrTwitch = mongoose.model(
    "twitch",
    {
        author: {
            type: String,
            require: true
        },
        question: {
            type: String,
            require: true
        },
        solution: {
            type: String,
            require: true
        }
    },
    "qr"
);
module.exports = { PostsModelQrTwitch };