const authKey = (permission) => {
  return (req, res, next) => {
    if (!req.params.key) {
      return res.status(401).json('Do not have permission to access.');
    }
    const key = req.params.key;
    if (permission !== key) {
      return res.status(401).json('Do not have permission to access.');
    }
    next();
  };
};

const authGet = () => {
  return (req, res, next) => {
    if (!req.params.email) {
      return res.status(401).json('Invalid id.');
    }
    // console.log(req.params.email)
    next();
  };
};

const authAddUser = (UserModel) => {
  return (req, res, next) => {
    const user = req.body;
    const userEmail = user.email;
    const query = UserModel.findOne({ email: userEmail });
    query.select('-password');
    query.exec(function (err, user) {
      if (err) {
        console.log(err);
      }
      if (user) {
        return res.status(400).json('Email already register.');
      }
      next();
    });
    // console.log(req.params.email)
  };
};

module.exports = { authKey, authGet, authAddUser };
