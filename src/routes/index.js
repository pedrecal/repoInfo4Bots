const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');

const {
  getOrgRepos,
  getReposForCarousel,
} = require('../controllers/reposController');

const router = express.Router();

router.get(
  '/',
  catchErrors((req, res) => res.send('Olá!'))
);

router.get('/allRepos', catchErrors(getOrgRepos));
router.get('/ReposForCarousel', catchErrors(getReposForCarousel));

module.exports = router;
