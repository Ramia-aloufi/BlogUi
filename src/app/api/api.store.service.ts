import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiStoreService {
  posts: Post[] | null = [];
  postsAll: Post[] | null = [];
  singlePost: Post | undefined = undefined;
  categories: Category[] | null = [];
  selectedPost :Post | null = null;

  constructor(private api: ApiService, private toastr: ToastrService) {}

  loadPosts() {
    this.api.getAll<Post[]>('post').subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        this.postsAll = data
        console.log(this.posts);
      },
    });
  }

  loadCategories(): void {
    this.api.getAll<Category[]>('category').subscribe((data: Category[]) => {
      this.categories = data;
      this.loadPosts();
    });
  }

  SubmitCategory(newCategory: any): void {
    this.api.post<Category>('category', newCategory).subscribe({
      next: (_) => {
        this.loadCategories();
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }

  deleteCategory(id: number) {
    this.api.delete('category', id).subscribe({
      next: (response: any) => {
        this.loadCategories();
      },
      error: (error) => {
        console.error('Error deleting category:', error);
      },
    });
  }
  UpdateCategory(editedCategory: Category) {
    this.api.put('category', editedCategory).subscribe({
      next: (response: any) => {
        this.loadCategories();
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }

  SubmitPost(newCategory: any): void {
    this.api.post<Category>('post', newCategory).subscribe({
      next: (_) => {
        this.loadCategories();
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }

  deletePost(id: number) {
    this.api.delete('post', id).subscribe({
      next: (response: any) => {
        this.loadCategories();
      },
      error: (error) => {
        console.error('Error deleting post:', error);
      },
    });
  }
  UpdatePost(editedCategory: Category) {
    this.api.put('post', editedCategory).subscribe({
      next: (response: any) => {
        this.loadCategories();
      },
      error: (error) => {
        this.toastr.error(error.error.message);
      },
    });
  }
  getCategoryName(categoryId: number | undefined): string {
    const category = this.categories?.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
  filterByPost(id: number) {
   this.posts = this.postsAll?.filter((cat) => cat.categoryId === id) || this.posts
  }
  dateFormat(date: Date ) {
    return formatDate(date, 'yyyy-MMM', 'en_US');
  }
  getSinglePost(id: number) {    
    this.api.get<Post>('post',id).subscribe((res)=>{
      this.singlePost = res
      console.log(this.singlePost?.content);

    })
  }

  resetFilterPosts() {
    this.posts = this.postsAll
   }
   editPost(post:Post){
    this.selectedPost = post
   }
}
