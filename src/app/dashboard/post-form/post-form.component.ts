import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiStoreService } from '../../api/api.store.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Editor, TBItems, Toolbar } from 'ngx-editor';
import { NgxEditorModule } from 'ngx-editor';
import { Post } from '../../model/post';
import { Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule, SidebarComponent,NgxEditorModule,PostsComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})

export class PostFormComponent {
  @Input() post: Post| null = this.store.selectedPost
  
  postForm: FormGroup;
  editor: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  constructor(private fb: FormBuilder, protected store: ApiStoreService,private router: Router) {
    this.postForm = this.fb.group({
      name: [this.post?.name || '', Validators.required],
      content: [this.post?.content || '', Validators.required],
      categoryId: [this.post?.categoryId || "", Validators.required],
      imageUrl: [this.post?.imageUrl || "", Validators.required]
    });
    this.editor = new Editor();
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      var form = this.postForm.value
      if(this.post){        
        Object.assign(this.post, form);        
        this.store.UpdatePost(this.post)
      }else{
      this.store.SubmitPost(form);
      }
      this.router.navigate(['/dashboard/posts']);
    }
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
