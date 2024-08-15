import { Component, Input } from '@angular/core';
import { Post } from '../../model/post';
import { ApiStoreService } from '../../api/api.store.service';
import { SinglePostComponent } from '../../pages/single-post/single-post.component';
import { RouterOutlet, RouterModule } from '@angular/router';
import { bg, color } from '../../model/Color';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [SinglePostComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  constructor(protected store:ApiStoreService) {
  }
   categoryColor = color
   categoryBG = bg

  @Input() post!: Post;

getColor(id:number){
return this.categoryColor[id]+ " "+ this.categoryBG[id] || 'text-[#a08d70] bg-[#a08d7050]'
}
}
