
// server connection
const router = require('express').Router();
// user routes
const userRoutes = require('./user-routes');
// post routes
const postRoutes = require('./post-routes');
// comment routes
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export the router
module.exports = router;
