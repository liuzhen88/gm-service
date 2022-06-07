import { Request, Response } from "express";
import { ResponseSuccessStruct, ResponseErrorStruct } from "./dto";

class BaseController {

  req: Request;
  res: Response;

  constructor(request: Request, response: Response) {
    this.req = request;
    this.res = response;
  }

  /**
   * http request ok response struct
   * @param {any} data  response data
   */
  ReponseSuccess(data?: any) {
    const body: ResponseSuccessStruct = { code: 0, message: 'ok', data: data }
    this.res.json(body);
  }

  /**
   * error response
   */
  ReponseError(err: any) {
    const body: ResponseErrorStruct = { code: 400, message: err }
    this.res.json(body)
  }
}

export default BaseController;