import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { Post } from '../../model/post';
import { ApiService } from '../../api/api.service';
import { APIResponse } from '../../model/response';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(protected store: ApiStoreService) {}


}
