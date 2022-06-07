import { Query } from "./dto";
 
const format = {
  getParams(query: any): Query {
    return {
      page: query.page || 1,
      pageSize: query.pageSize || 10,
      name: query.name || ""
    }
  }
}

export default format;