const express = require("express");
const router = express.Router();

const refreshTokensHandler = require("../routes/handler/refresh_tokens");

router.post("/", refreshTokensHandler.create);
router.get("/", refreshTokensHandler.getToken);

module.exports = router;
