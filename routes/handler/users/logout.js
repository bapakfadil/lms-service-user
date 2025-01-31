const { User, RefreshToken } = require("../../../models");
const Validator = require("fastest-validator");

module.exports = async (req, res) => {
  const userId = req.body.user_id;
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({
      status: "Error",
      messsage: "User not found",
    });
  }

  await RefreshToken.destroy({
    where: { user_id: userId },
  });

  return res.json({
    status: "Success",
    message: "Refresh token deleted",
  });
};
