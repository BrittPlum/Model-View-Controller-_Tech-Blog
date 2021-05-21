const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    // create a new blogpost
    try { 
        const blogPost = await BlogPost.create({
            ...req.body,
            user_id:req.session.user_id
        })
        res.status(200).json(blogPost)
    } catch (err) {
        res.status(500).json("error in new blogpost" + err)
    }
    });

router.get('/:id', withAuth, async (req, res) => {
    try {
        const post = await BlogPost.findByPk();
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    // update  blogpost by id
    try {
        const post = await BlogPost.update({
            title: req.body.title,
            content: req.body.content
        }, 
        {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const BlogPostData = await BlogPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!BlogPostData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(BlogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;