// designed to get info from db and post to db do all crud operations 
//diff routes to handle each operation

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');


router.use('/users', userRoutes);
router.use('/blogposts', blogPostRoutes);


module.exports = router;