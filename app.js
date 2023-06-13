// const express = require("express");
import express from "express";
import HelloControllers from "./controllers/hello-controllers.js";
import UserControllers from "./controllers/user-controllers.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import session from "express-session";
import AuthController from "./users/auth-controller.js";

const app = express();

app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
      // store: new session.MemoryStore(),
    })
);
   
// app.use(
//   session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     store: new session.MemoryStore(),
//   })
// );

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000","https://a5--lustrous-pasca-38b123.netlify.app"],
}));

app.use(express.json());
// const port = process.env.PORT || 4000;

TuitsController(app);
HelloControllers(app);
UserControllers(app);
AuthController(app);

app.listen(process.env.PORT || 4000);