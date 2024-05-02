const config = require("./config");
const userService = require("./userService");

// failes test
function ensureUserIdMiddleware(req, res, next) {
  if (!req.session.userId) {
    const cookie = req.cookies[config.cookieName];
    if (cookie) {
      req.session.userId = cookie;
    } else {
      userService.createNewUser(undefined, userObject => {
        const userId = userObject._id;
        req.session.userId = userId;
        res.cookie(config.cookieName, userId);
      });
    }
  }
  next();
}

module.exports = {
  ensureUserIdMiddleware,
};
