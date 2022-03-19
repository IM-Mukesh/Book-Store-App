const PORT = 5000;
const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

const bodyParser = require("body-parser");
const userRoute = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');

app.use(bodyParser.json());
app.use(express.json());

//Connecting to the database
const mongoose = require("mongoose");
var mongoDB = "mongodb://127.0.0.1/bookstore";
mongoose.connect(mongoDB);

//using routes
app.use('/user', userRoute);
app.use('/book',bookRoute);

app.get("/", (req, res) => {
  res.json({
    status: "you are in homepage..",
  });
});


app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
