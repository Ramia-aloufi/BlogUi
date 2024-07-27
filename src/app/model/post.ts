export interface Post {
    id:number
    name: string;
    content: string;
    categoryId: number;
    imageUrl: string;
    updatedAt:Date;
    createdAt:Date;
  }

 type IsPost<T> = T extends Post ? true : false;

  
