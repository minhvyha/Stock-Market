require('dotenv').config();
const { authKey, authGet } = require('./middleware/middleware');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3010;
const { UserModel } = require('./models/UserModel');

app.use(express.json());

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
app.get(
  '/:key/:email',
  [authGet(), authKey(process.env.PASSWORD)],
  (req, res) => {
    const user = UserModel.findOne({ email: req.params.email });
    user.select('-password');
    user.exec(function (err, user) {
      if (err) {
        console.log(err);
      }
      res.json(user)
      console.log(user);
    });
    // console.log(user);
  }
);

app.post('/addUser', [authKey(process.env.PASSWORD)], async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.post('/editUser', [authKey(process.env.PASSWORD)], async (req, res) => {
  const user = req.body;
  UserModel.findByIdAndUpdate(note._id, user, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/deleteUser', [authKey(process.env.PASSWORD)], async (req, res) => {
  const id = req.body._id;
  UserModel.deleteOne({ _id: id }).then((result) => {
    res.json(result);
  });
});

//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('listening for requests on Port: ' + PORT);
  });
});
