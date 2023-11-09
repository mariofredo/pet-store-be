const { User } = require("../models");
const { sign, verify } = require("../helper/jwt");
class UserController {
  static register = async (req, res) => {
    try {
      const { email, password, address, phoneNumber } = req.body;
      const user = await User.create({
        email,
        password,
        address,
        phoneNumber,
      });

      res.status(200).json({
        code: 200,
        message: "User Successfully Created!",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const found = await User.findOne({
        where: {
          email,
        },
      });
      if (found) {
        res.status(200).json({
          code: 200,
          message: "Login Has Been Successful",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = UserController;
