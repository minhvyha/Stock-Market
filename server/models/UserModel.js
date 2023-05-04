const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  assets: {
    type: mongoose.Schema.Types.Mixed,
    require: true,
  },
  cash: {
    type: Number,
    default: 0,
  },
  totalAssets: {
    type: Number,
    default: 0,
  },
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel};
