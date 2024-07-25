import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStoreService {
  posts: Post[] | null = [];
  categories: Category[] | null = [];

  constructor(private api: ApiService, private toastr: ToastrService) {}


  loadPosts(){
      this.api.getAll<Post[]>('post').subscribe({
        next:((data:Post[])=>{
          this.posts = data
          console.log(this.posts);

        })    });
    }

  loadCategories(): void {
    this.api.getAll<Category[]>('category').subscribe((data: Category[]) => {
      this.categories = data;
      this.loadPosts()
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
}
