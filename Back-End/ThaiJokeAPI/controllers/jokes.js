const db = require('../models/index')

const getAllJokes = async (req, res) => {
    const allJokes = await db.Jokes.findAll({ where: { user_id: req.user.id } });
    res.status(200).send(allJokes)
}

const getJokeById = async (req, res) => {
    const joke = await db.Jokes.findOne({ where: { id: req.params.id, user_id: req.user.id } })
    res.status(200).send(joke)
}

const addJokes = async (req, res) => {
    const newJokes = await db.Jokes.create({
        jokes: req.body.joke,
        user_id: req.user.id
    });
    res.status(201).send(newJokes)
}

const deleteJoke = async (req, res) => {
    const targetId = req.params.id
    const targetJoke = await db.Jokes.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetJoke) {
        await targetJoke.destroy();
        res.status(204).send();
    } else {
        res.status(404).send({ message: "not found" })
    }
}

const like = async (req, res) => {
    const targetId = req.params.id
    const targetJoke = await db.Jokes.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetJoke) {
        await targetJoke.update({
            like: true,
            dislike: false
        });
        res.status(200).send();
    } else {
        res.status(404).send({ message: "not found" })
    }
}

const dislike = async (req, res) => {
    const targetId = req.params.id
    const targetJoke = await db.Jokes.findOne({ where: { id: targetId, user_id: req.user.id } })
    if (targetJoke) {
        await targetJoke.update({
            like: false,
            dislike: true
        });
        res.status(200).send();
    } else {
        res.status(404).send({ message: "not found" })
    }
}

module.exports = {
    getAllJokes,
    addJokes,
    getJokeById,
    deleteJoke,
    like,
    dislike
}