// const express = require('express');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');
// const router = express.Router();


// // on ajoute le middleware MULTER 
// // veiller à placer M après AUTH, m'orde des middlewares est important !

// const postCtrl = require('../controllers/post');

// router.get('/', auth,postCtrl .getAllPosts);


// router.post('/', auth, multer, postCtrl.createPost);
// router.get('/:id', auth, postCtrl.getOnePost);


// router.put('/:id', auth, multer, postCtrl.modifyPost);
// router.delete('/:id', auth, postCtrl.deletePost);


// router.post('/:id/like', auth, postCtrl.likePost);

// module.exports = router;