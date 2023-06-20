// const express = require("express");
import express from "express";
import HelloControllers from "./controllers/hello-controllers.js";
import UserControllers from "./controllers/user-controllers.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";




// mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
mongoose.connect("mongodb+srv://sayalioak52:jppVpeW4z9nSbUrE@cluster1.q5c4s3v.mongodb.net/tuiter?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to mongo db");
})
.catch((err) => {
  console.log(err);
});

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
// mongoose.connect(CONNECTION_STRING)
// .then(() => {
//   console.log("Connected to mongo db");
// })
// .catch((err) => {
//   console.log(err);
// });

const app = express();
app.set("trust proxy", 1);

app.use(
  session({
    secret: "any string",
    resave: false,
    proxy: true,
    saveUninitialized: false,
    cookie: {
      sameSite:"none",
      secure: true,
    },
    // store: new session.MemoryStore(),
  })
);


// app.use(
//     session({
//       secret: "any string",
//       resave: false,
//       saveUninitialized: true,
//       // store: new session.MemoryStore(),
//     })
// );

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000",
    "https://a5--lustrous-pasca-38b123.netlify.app",
    "https://a6--lustrous-pasca-38b123.netlify.app"],
}));

app.use(express.json());

TuitsController(app);
HelloControllers(app);
UserControllers(app);
AuthController(app);

app.listen(process.env.PORT || 4000);
