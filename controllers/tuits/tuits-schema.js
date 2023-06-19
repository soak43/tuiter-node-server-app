import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    handle: String,
    time: {type: String, default: "1m"},
    dislikes: Number,
    disliked: Boolean,
    image: String,
    replies: Number,
    retuits: Number,
    title: String,
    username: String,
    topic: String,
},{collection: 'tuits'});

export default schema;