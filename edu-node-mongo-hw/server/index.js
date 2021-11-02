const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/node-mongo-hw"; // change this as needed

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

const Schema = mongoose.Schema

const item = new Schema({
  image_url: String,
	date: String
})

const PHOTO = mongoose.model("PHOTO", item)

// The method of the root url. Be friendly and welcome our user :)
router.get("/", function (req, res) {
  res.json({ message: "Welcome to the APOD app." });
});

router.get("/favorite", function (req, res) {
  // TODO:
  PHOTO.find().then((todos) => {
    res.json({ message: 'Return favorites.', favorites: todos});
  })
});
router.post("/add", function (req, res) {
  // TODO:
  const picture = new PHOTO({
    image_url: req.body.image_url,
    date: req.body.date
  })
  picture.save((error, document) => {
    if (error) {
			res.json({ status: "failure" })
		} else {
      res.json({               // Save item to the database
        status: "success",
        id: picture._id,
        content: req.body
      })
    }
  })
});

router.post("/delete", function (req, res) {
  // TODO:
  PHOTO.deleteMany({date: req.body.date}, (error, picture) => {  
    if (error) {
      res.status(500).json({ status: "failure"})
    } else {
      res.json(picture)
    }
});
});

app.use("/api", router); // API Root url at: http://localhost:8080/api

app.listen(port);
console.log("Server listenning on port " + port);
