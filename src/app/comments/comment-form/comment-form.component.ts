import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService,private apiService:ApiService,private store:ApiStoreService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  addComment(form: NgForm): void {
    if (this.isLoggedIn) {
      console.log(this.authService.getUserId() );      
      const newComment = { name: form.value.comment, userId:this.authService.getUserId() ,postId: this.store.singlePost?.id};
      this.apiService.post<{token:string,name:string}>('comment',newComment).subscribe( (response) => {
        console.log(response);
        if(this.store.singlePost){
          this.store.getSinglePost(this.store.singlePost?.id)
          form.reset()
        }

      })

    } else {
    }
  }

}
