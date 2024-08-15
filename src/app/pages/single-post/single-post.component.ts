import { Component, Input, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { Post } from '../../model/post';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiStoreService } from '../../api/api.store.service';
import { switchMap } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { AuthService } from '../../service/auth.service';
import { bg, color } from '../../model/Color';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent ,CommentFormComponent, CommentListComponent,RouterModule,NgxSpinnerModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'})
export class SinglePostComponent implements OnInit {
  post: Post| undefined;
  isLoggedIn: boolean = false;
  show:boolean = false

  constructor(private route: ActivatedRoute,protected store:ApiStoreService,private authService:AuthService,private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.spinner.show();
    this.route.params.subscribe(params => {
      const id:number = Number(params['id'])
      console.log('Test ID:',Number(id));
       this.store.getSinglePost(id)
       this.spinner.hide();

       
      

      
    });
  }
  showComments(){
    this.show = !this.show
  }
  categoryColor = color
  categoryBG = bg


getColor(id:number){
return this.categoryColor[id]+ " "+ this.categoryBG[id] || 'text-[#a08d70] bg-[#a08d7050]'
}

  }

