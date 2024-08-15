import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiStoreService } from '../../api/api.store.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { PostFormComponent } from "../post-form/post-form.component";
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ReactiveFormsModule, SidebarComponent, PostFormComponent,RouterOutlet,RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent  {

showForm  = false

  constructor(protected store: ApiStoreService,private router: Router) {

  }
  onAdd(){
    this.showForm = true
  }

  onEdit(post: Post): void {
    this.store.editPost(post)
    this.router.navigate(['/dashboard/posts/new']);

  }
  onDelete(id: number): void {
    this.store.deletePost(id)
  }
}


