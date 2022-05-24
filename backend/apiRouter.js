// Imports
var express = require('express');
var usersCtrl = require('./controllers/users');
var postCtrl = require('./controllers/post');


// Router

exports.router = (function() {
    const apiRouter = express.Router();

    // Users routes
    apiRouter.route('/signup/').post(usersCtrl.signup);
    apiRouter.route('/users/login/').post(usersCtrl.login);
    apiRouter.route('/users/profil/').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/profil/').put(usersCtrl.updateUserProfile);

    // Post Routes
    apiRouter.route('/post/new/').post(postCtrl.createPost);
    apiRouter.route('/post/').get(postCtrl.listPost);


    return apiRouter;
});