export interface Post {
    id:number
    name: string;
    content: string;
    categoryId: number;
    imageUrl: string;
  }

 type IsPost<T> = T extends Post ? true : false;

  
