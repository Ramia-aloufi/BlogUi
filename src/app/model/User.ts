import { Comment } from "./Comment"

export interface User {
    id:number
    email:string
    name:string
    password:string
    comments:Comment[]

    
}