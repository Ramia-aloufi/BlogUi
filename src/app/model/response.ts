import { IPagedResult } from "./Pagination"

export interface APIResponse<T> {
    status:boolean,
    statusCode:number,
    data:T
    message:string
}
