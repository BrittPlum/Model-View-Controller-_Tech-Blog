// these are routes that are designed to give the user pages 
//first get your data and then serialize your data / getting data and making it readable
// what r u getting for your response and what you are sending as as request
// res.resnder for home pages 

//activity 16 info thats accesiable on all routes  and 8 and 24(helpers are in utilities)
// req.session.userID
//req.session.loggedIn

//req.session.destroy

const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all blogs and JOIN with user data
      const blogsData = await BlogPost.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

      // Serialize data so the template can read it
    const blogs = blogsData.map((blog) => blog.get({ plain: true }));
console.log(blogs);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;