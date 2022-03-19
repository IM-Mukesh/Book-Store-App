const express = require("express");
const router = express.Router();
const book = require("../models/book");
const booksData = require("../books/booksData");

router.get("/getbooks", async(req, res) => {
  let data = await book.find();
  res.send(data)
})

router.post("/addbook", async (req, res) => {
  try {
    await book.create(booksData);
    res.json({
      status: "Books inserted in db",
    });
  } catch (e) {
    console.log(e.message);
    res.json({
      error: e.message,
    });
  }
});

router.post("/addnewbook", async(req, res) => {
  try {
    await book.create(req.body)
    res.json({
      status: "new book inserted into the database",
    });
  } catch (e) {
    console.log(e.message);
    res.json({
      error: e.message,
    });
  }
});

module.exports = router;
