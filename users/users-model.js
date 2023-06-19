import usersSchema from "./users-schema.js";
import mongoose from "mongoose";

const usersModel = mongoose.model("Users", usersSchema);

export default usersModel;