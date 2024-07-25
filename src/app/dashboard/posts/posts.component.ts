import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent  {
  postForm: FormGroup;



  constructor(private fb: FormBuilder, protected store: ApiStoreService,) {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      content: ['', Validators.required],
      categoryId: ['', Validators.required],
      imageURL: ['', Validators.required]
    });
  }





  onSubmit(): void {
    if (this.postForm.valid) {
      const post: any = this.postForm.value;
      this.store.SubmitPost(post);
    }
  }
  getCategoryName(categoryId: number): string {
    const category = this.store.categories?.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
  onEdit(post: any): void {
    console.log(post);
  }
  onDelete(id: number): void {
    this.store.deletePost(id)
  }
}


