const express = require("express");
require("dotenv/config");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

// import MovieData from "./models/MovieData"
// import data from "./sample_data";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(BodyParser.json());
// app.use(cors())

// import routes
const Movie_Data = require("./routes/movie_data");
const Admin = require("./routes/admin");

// use routes
app.use("/movie_data", Movie_Data);
app.use("/admin", Admin);


// const movie_Data = new MovieData(data);

// movie_Data.save((error) => {
//   if(error) {
//     console.log("error");
//   }else {
//     console.log('data has been saved');
//   }
// })
mongoose.connect(
  process.env.MONGO_DB_LOCAL_PATH,

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);

    console.log("database connected");
  }
);

// const MONGODB_URI = 'mongodb+srv://sami:<asdfg12345>@cluster0.8wbzt.mongodb.net/test'

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/netflix',

//   // FINISH
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     if (err) console.log(err);

//     console.log("database connected");
//   }
// );

// server listen on port

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// server side code


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}




