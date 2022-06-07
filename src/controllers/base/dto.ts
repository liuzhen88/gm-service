export interface ResponseSuccessStruct {
  code: number,
  message: string,
  data: object
}

export interface ResponseErrorStruct {
  code: number,
  message: object
}