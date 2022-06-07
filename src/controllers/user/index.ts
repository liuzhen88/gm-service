import Base from "../base";
import { Request, Response } from "express";
import { Query } from "./dto";

/**
 * @see controller应遵守最小action原则，每个方法不应该超过100行。
 * @see 首字母大写的方法，意味着对外调用。反之，class内部使用。外部调用的方法在前，内部方法调用在后
 */
class UserController extends Base {

  req: Request;
  res: Response;

  constructor(req: Request, res: Response) {
    super(req, res);
    this.req = req;
    this.res = res;
  }

  /**
   * 列表
   * @see GET /action
   */
  Get(query: Query) {
    this.ReponseSuccess();
  }

  /**
   * 详情
   * @see GET /action/:id
   */
  Show() {

  }

  /**
   * 创建
   * @see POST /action
   */
  Post() {

  }

  /**
   * 更新
   * @see PUT /action/:id
   */
  Put() {

  }

  /**
   * 删除
   * @see DELETE /action/:id
   */
  Delete() {
    
  }
}

export default UserController;