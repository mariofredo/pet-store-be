const express = require("express");
const userRouter = require("./user");
const authRouter = require("./auth");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);

module.exports = router;
