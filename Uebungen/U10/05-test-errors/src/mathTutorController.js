const config = require("./config");
const userService = require("./userService");

// corrected
function ensureUserIdMiddleware(req, res, next) {
  if (!req.session.userId) {
    const cookie = req.cookies[config.cookieName];
    if (cookie) {
      req.session.userId = cookie;
      next();
    } else {
      userService.createNewUser(undefined, function(userObject) {
        const userId = userObject._id;
        req.session.userId = userId;
        res.cookie(config.cookieName, userId);
        next();
      });
    }
  } else {
    next();
  }
}

module.exports = {
  ensureUserIdMiddleware,
};