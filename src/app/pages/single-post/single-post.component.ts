import { Component, Input, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { Post } from '../../model/post';
import { ActivatedRoute } from '@angular/router';
import { ApiStoreService } from '../../api/api.store.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent ,CommentFormComponent, CommentListComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'})
export class SinglePostComponent implements OnInit {
  post: Post| undefined;

  constructor(private route: ActivatedRoute,protected store:ApiStoreService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id:number = Number(params['id'])
      console.log('Test ID:',Number(id));
       this.store.getSinglePost(id)
       
      

      
    });
  }


  }

