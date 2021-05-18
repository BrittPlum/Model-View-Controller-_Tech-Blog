const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    // create a new blogpost
    try { 
        const blogPost = await BlogPost.create(req.body)
        res.status(200).json(blogPost)
    } catch (err) {
        res.status(500).json("error in new blogpost" + err)
    }
    });

router.put('/:id', async (req, res) => {
    // update  blogpost by id
    try {

    } catch (err) {
        res.status(500).json("error in blogpost update" + err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    // delete blogpost by id
    try {

    } catch (err) {
        res.status(500).json("error in blogpost delete" + err)
    }
});

module.exports = router;