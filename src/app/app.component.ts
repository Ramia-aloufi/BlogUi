import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {FormsModule} from '@angular/forms'
import { AuthComponent } from './pages/auth/auth.component';
import { CommonModule } from '@angular/common';
import { ApiStoreService } from './api/api.store.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, HomeComponent, FooterComponent, FormsModule, AuthComponent, CommonModule, RouterModule, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent implements OnInit {
  constructor(private store: ApiStoreService) {}

  ngOnInit() {
    this.store.loadCategories()
  }
  title = 'blog_frontend';
}
