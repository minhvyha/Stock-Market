require('dotenv').config();
const { authKey } = require('./middleware/middleware');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3010;
const { UserModel } = require('./models/UserModel');

app.use(express.json())
 
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Routes go here
app.get('/:key', [authKey(process.env.PASSWORD)], (req, res) => {
  console.log(req.body);
  res.send({ title: 'Books', body: 'asdf' });
});

app.post("/addUser", [authKey(process.env.PASSWORD)], async (req, res) =>{
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
})

app.post("/editUser", [authKey(process.env.PASSWORD)], async (req, res) =>{
  const user = req.body;
  UserModel.findByIdAndUpdate(note._id, user, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
})

app.post("/deleteUser", [authKey(process.env.PASSWORD)], async (req, res) =>{
  const id = req.body._id;
  UserModel.deleteOne({ _id: id }).then((result) => {
    res.json(result);
  });
})


app.get('/books', async (req, res) => {
  const book = await Book.find();

  if (book) {
    res.json(book);
  } else {
    res.send('Something went wrong.');
  }
});


app.get('/add-note', async (req, res) => {
  try {
    await Book.insertMany([
      {
        title: 'Sons Of Anarchy',
        body: 'Body text goes here...',
      },
      {
        title: 'Games of Thrones',
        body: 'Body text goes here...',
      },
    ]);
    res.json({ Data: 'Added' });
  } catch (error) {
    console.log('err', +error);
  }
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('listening for requests on Port: ' + PORT);
  });
});
