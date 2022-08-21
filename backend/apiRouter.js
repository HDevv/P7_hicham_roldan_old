// Imports
var express = require("express");
var usersCtrl = require("./controllers/users");
var postCtrl = require("./controllers/post");

// const auth = require('../backend/middleware/auth');

// Router

exports.router = (function() {
  
  var apiRouter = express.Router();
  
 
  // Users routes
  apiRouter.route('/users/signup/').post(usersCtrl.signup);
  apiRouter.route('/users/login/').post(usersCtrl.login);
  apiRouter.route('/users/profil/').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/profil/').put(usersCtrl.updateUserProfile);

  // Post Routes
  apiRouter.route("/post/new/").post(postCtrl.createMessage);
  apiRouter.route("/post/").get(postCtrl.listMessages);

  return apiRouter;
})();

// peut être que le pb vient des 2 parentheses à la
// fin qu'il faut ajouter


 // // Users routes
  // apiRouter.post('/users/signup/', auth, usersCtrl.signup);
  // apiRouter.post('/users/login/', auth, usersCtrl.login);
  // apiRouter.get('/users/profil/', auth, usersCtrl.getUserProfile);
  // apiRouter.put('/users/profil/', auth, usersCtrl.updateUserProfile);

  // // Post Routes
  // apiRouter.post('/post/new/', auth, postCtrl.createMessage);
  // apiRouter.get('/post/', auth, postCtrl.newMessage);
