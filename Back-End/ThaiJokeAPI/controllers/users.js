const db = require('../models/index');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.Users.findOne({
        where: {
            username: username
        }
    });
    if (targetUser) {
        res.status(400).send({ message: "This username has been taken." })
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        await db.Users.create({
            username: username,
            password: hashedPassword,
        });

        res.status(201).send({ message: "User Created" })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const targetUser = await db.Users.findOne({ where: { username: username } });
    if (!targetUser) {
        res.status(400).send({ message: "username or password is incorrect." })
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if (isCorrectPassword) {
            const payload = {
                username: targetUser.username,
                id: targetUser.id
            }
            const token = jwt.sign(payload, "thaijokes")

            res.status(200).send({
                token: token,
                message: "Log in Successful",
            });
        } else {
            res.status(400).send({ message: "username or password is incorrect." })
        }
    }
}

module.exports = {
    register,
    login
}