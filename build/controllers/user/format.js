"use strict";
exports.__esModule = true;
var format = {
    getParams: function (query) {
        return {
            page: query.page || 1,
            pageSize: query.pageSize || 10,
            name: query.name || ""
        };
    }
};
exports["default"] = format;
