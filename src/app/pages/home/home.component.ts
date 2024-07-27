import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { Post } from '../../model/post';
import { ApiService } from '../../api/api.service';
import { APIResponse } from '../../model/response';
import { ApiStoreService } from '../../api/api.store.service';
import { SinglePostComponent } from '../single-post/single-post.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoryNavbarComponent } from "../../layouts/category-navbar/category-navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, RouterOutlet, RouterModule, CategoryNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(protected store: ApiStoreService) {}


}
