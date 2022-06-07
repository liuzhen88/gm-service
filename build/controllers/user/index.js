"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/**
 * @see controller应遵守最小action原则，每个方法不应该超过100行。
 * @see 首字母大写的方法，意味着对外调用。反之，class内部使用。外部调用的方法在前，内部方法调用在后
 */
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController(req, res) {
        var _this = _super.call(this, req, res) || this;
        _this.req = req;
        _this.res = res;
        return _this;
    }
    /**
     * 列表
     * @see GET /action
     */
    UserController.prototype.Get = function (query) {
        this.ReponseSuccess();
    };
    /**
     * 详情
     * @see GET /action/:id
     */
    UserController.prototype.Show = function () {
    };
    /**
     * 创建
     * @see POST /action
     */
    UserController.prototype.Post = function () {
    };
    /**
     * 更新
     * @see PUT /action/:id
     */
    UserController.prototype.Put = function () {
    };
    /**
     * 删除
     * @see DELETE /action/:id
     */
    UserController.prototype.Delete = function () {
    };
    return UserController;
}(base_1["default"]));
exports["default"] = UserController;
