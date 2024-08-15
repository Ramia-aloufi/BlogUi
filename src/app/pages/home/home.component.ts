import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ApiStoreService } from '../../api/api.store.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoryNavbarComponent } from "../../layouts/category-navbar/category-navbar.component";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, RouterOutlet, RouterModule, CategoryNavbarComponent,NgxSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(protected store: ApiStoreService) {

  }


}
