import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password : {type: String, required: true},
    firstName : {type:String, default:""},
    lastName : {type:String, default:""},
}, {collection: "users"});

export default usersSchema;