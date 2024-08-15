import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { ApiService } from './api.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../model/category';
import { formatDate } from '@angular/common';
import { IPagedResult } from '../model/Pagination';
import { APIResponse } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class ApiStoreService {
  posts: Post[] | null = [];
  postsAll: Post[] | null = [];
  singlePost: Post | undefined = undefined;
  categories: Category[] | null = [];
  selectedPost: Post | null = null;

  TotalRecords: number = 3;
  PageNumber: number = 1;
  PageSize: number = 0;
  TotalPages?: number;

  constructor(private api: ApiService, private toastr: ToastrService) {}

  loadPosts( ) {    
    this.api
      .getAll<IPagedResult<Post>>('post', {
        pageNumber: 1,
        pageSize: 0 ,
      })
      .subscribe({
        next: (result) => {
          this.postsAll = result.data;
          this.posts = result.data;
          this.PageNumber = result.pageNumber;
          this.PageSize = result.pageSize;
          this.TotalPages = result.totalPages;
          this.TotalRecords = result.totalRecords;
        },
      });
      
  }


  loadCategories(): void {
    this.api
      .getAll<IPagedResult<Category>>('category', {
        pageNumber: 1,
        pageSize: 0,
      })
      .subscribe((data) => {
        this.categories = data.data;
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
  UpdatePost(editedPost: Post) {
    console.log(editedPost);

    this.api.put('post', editedPost).subscribe({
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
    this.posts =
      this.postsAll?.filter((cat) => cat.categoryId === id) || this.posts;
  }
  dateFormat(date: Date) {
    return formatDate(date, 'yyyy-MMM', 'en_US');
  }
  getSinglePost(id: number) {
    this.api.get<Post>('post', id).subscribe((res) => {
      this.singlePost = res;
      console.log(this.singlePost?.content);
    });
  }

  resetFilterPosts() {
    this.posts = this.postsAll;
  }
  editPost(post: Post) {
    this.selectedPost = post;
  }
}
