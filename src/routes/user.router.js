const express = require("express");
const { getAll } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.route("/").get(getAll);

module.exports = userRouter;
