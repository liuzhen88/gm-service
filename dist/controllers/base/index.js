class BaseController {
    constructor(request, response) {
        this.req = request;
        this.res = response;
    }
    /**
     * http request ok response struct
     * @param {any} data  response data
     */
    ReponseSuccess(data) {
        const body = { code: 0, message: 'ok', data: data };
        this.res.json(body);
    }
    /**
     * error response
     */
    ReponseError(err) {
        const body = { code: 400, message: err };
        this.res.json(body);
    }
}
export default BaseController;
//# sourceMappingURL=index.js.map