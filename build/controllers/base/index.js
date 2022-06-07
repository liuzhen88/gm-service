"use strict";
exports.__esModule = true;
var BaseController = /** @class */ (function () {
    function BaseController(request, response) {
        this.req = request;
        this.res = response;
    }
    /**
     * http request ok response struct
     * @param {any} data  response data
     */
    BaseController.prototype.ReponseSuccess = function (data) {
        var body = { code: 0, message: 'ok', data: data };
        this.res.json(body);
    };
    /**
     * error response
     */
    BaseController.prototype.ReponseError = function (err) {
        var body = { code: 400, message: err };
        this.res.json(body);
    };
    return BaseController;
}());
exports["default"] = BaseController;
