import { Component, Input } from '@angular/core';
import { Comment } from '../../model/Comment';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../api/api.service';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent {
userId:number|null = null
  constructor(private authService: AuthService,private apiService:ApiService ,protected store:ApiStoreService){}
  ngOnInit(){
    this.userId = this.authService.getUserId()
    
  }
  onDelete(id:number){
    this.apiService.delete('comment',id).subscribe((res)=>{
      console.log(res);
      if(this.store.singlePost){
        this.store.getSinglePost(this.store.singlePost?.id)
      }
      
    })

  }

}
