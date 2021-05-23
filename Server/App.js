const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const multer = require("multer");
const upload = multer();
const cors = require("cors");
const expressValidator = require("express-validator");
const passport = require("passport");
require("dotenv").config();
const path = require("path");

const connectToDB = require("./config/dbConnection");

//App
const App = express();
const http = require("http").createServer(App);

let io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const { setSocket } = require("./config/socketConfig");

//debugger
connectToDB();

//middleware
App.use(morgan("dev"));
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
// App.use(upload.array("photo" || "avatar", 5));

App.use(express.static("public"));
App.use(cookieParser());
App.use(expressValidator());
App.use(cors());

// view engine setup
App.set("views", path.join(__dirname, "views"));
App.set("view engine", "ejs");

//routes middleware

App.get("/", (req, res) =>
  res.json({ message: "Welcome to LenX! - By Victor Alvarez" })
);
App.use("/api/auth", require("./routes/auth"));
App.use("/api/user", require("./routes/user"));
App.use("/api/categories", require("./routes/category"));
App.use("/api/products", require("./routes/product"));
App.use("/api/braintree", require("./routes/braintree"));
App.use("/api/order", require("./routes/order"));
App.use("/api/chat", require("./routes/chat"));
App.use("/api/profile", require("./routes/profile"));
App.use("/api/review", require("./routes/review"));
App.use("/api/market", require("./routes/marketplace"));

// Initialise passport middleware
App.use(passport.initialize());
require("./middlewares/jwt")(passport);

const port = process.env.PORT || 8000;

http.listen(port, () => {
  console.log(`Server hosted on: http://localhost:${port}`);
});

// Sets the configuration for socket io
setSocket(io);

/*
App.listen(port, () =>{
  console.log(`Server hosted on: http://localhost:${port}`)
})
*/
