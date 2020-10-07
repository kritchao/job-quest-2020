const express = require('express');
const router = express.Router();
const jokesController = require('../controllers/jokes')
const passport = require('passport')

const authentication = passport.authenticate("jwt", { session: false });

router.get('/', authentication, jokesController.getAllJokes);
router.get('/:id', authentication, jokesController.getJokeById);
router.post('/', authentication, jokesController.addJokes);
router.delete('/:id', authentication, jokesController.deleteJoke);
router.post('/:id/like', authentication, jokesController.like);
router.post('/:id/dislike', authentication, jokesController.dislike);

module.exports = router;