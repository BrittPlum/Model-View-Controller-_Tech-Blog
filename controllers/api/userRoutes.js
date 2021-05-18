const { Router } = require("express");



// res.json
router.post('/', async (req, res) => {

});
// create

router.post('/login', async (req, res) => {

});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });