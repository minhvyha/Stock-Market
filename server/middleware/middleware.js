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
    if (!req.params._id) {
      return res.status(401).json('Invalid id.');
    }
    next();
  };
};

module.exports = { authKey, authGet };
