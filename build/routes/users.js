"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_1 = require("../controllers/user");
var format_1 = require("../controllers/user/format");
var router = (0, express_1.Router)();
router.get("/", function (req, res, next) {
    var userController = new user_1["default"](req, res);
    var query = format_1["default"].getParams(req.query);
    userController.Get(query);
});
exports["default"] = router;
