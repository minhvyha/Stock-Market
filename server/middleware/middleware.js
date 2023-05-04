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

const authAddUser = () => {
  return (req, res, next) => {
    if (!req.params.email) {
      return res.status(401).json('Invalid id.');
    }
    // console.log(req.params.email)
    next();
  };
};

module.exports = { authKey, authGet, authAddUser };
