const express = require('express');
const { catchErrors } = require('../middlewares/errorMiddleware');

const {
  getOrgRepos,
  getCarouselRepos,
} = require('../controllers/reposController');

const router = express.Router();

router.get(
  '/ping',
  catchErrors((req, res) => res.send('pong'))
);

router.get('/allRepos', catchErrors(getOrgRepos));
router.get('/reposCarousel', catchErrors(getCarouselRepos));

module.exports = router;
