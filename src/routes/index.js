const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

router.get(
  '/',
  catchErrors((req, res) => res.send('Olá!'))
);

module.exports = router;
