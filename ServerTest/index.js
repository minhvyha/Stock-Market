require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Book = require("./models/books");

const app = express()
const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.get('/', (req,res) => {
    res.send({ title: 'Books' });
})

app.get('/books', async (req,res)=> {

  const book = await Book.find();

  if (book) {
    res.json(book)
  } else {
    res.send("Something went wrong.");
  }
  
});

app.get('/add-note', async (req,res) => {
  try {
    await Book.insertMany([
      {
        title: "Sons Of Anarchy",
        body: "Body text goes here...",
      },
      {
        title: "Games of Thrones",
        body: "Body text goes here...",
      }
    ]);
    res.json({"Data":"Added"})
  } catch (error) {
    console.log("err", + error);
  }
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})