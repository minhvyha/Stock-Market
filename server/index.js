const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
const port = 3001;

app.use(cors({
    origin: "https://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    
}));
app.use(
  cookieSession({
    name: "session",
    keys: ["stock-market"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json());

app.listen(port, () => {
  console.log("app listening");
});
