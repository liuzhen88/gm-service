const format = {
    getParams(query) {
        return {
            page: query.page || 1,
            pageSize: query.pageSize || 10,
            name: query.name || ""
        };
    }
};
export default format;
//# sourceMappingURL=format.js.map