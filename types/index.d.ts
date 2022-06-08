/**
 * ts Declaration
 */

declare namespace Express {
  export interface Request {
    db?: import("sequelize").Sequelize
  }
}