import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Category } from '../../model/category';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent  {

  constructor(protected store: ApiStoreService) { 
  }

}
