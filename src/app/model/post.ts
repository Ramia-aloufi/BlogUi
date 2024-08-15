import { Comment } from "./Comment";

export interface Post {
    id:number
    name: string;
    content: string;
    categoryId: number;
    imageUrl: string;
    updatedAt:Date;
    createdAt:Date;
    comments:Comment[] | null
  }
  
