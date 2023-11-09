const express = require("express");
const userRouter = express.Router();

userRouter.route("/").get((req, res) => {});
module.exports = userRouter;
