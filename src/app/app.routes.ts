import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { PostFormComponent } from './dashboard/post-form/post-form.component';
import { ActivateComponent } from './pages/activate/activate.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'category',component:SingleCategoryComponent},
    {path:'post/:id',component:SinglePostComponent},
    {path:'about',component:HomeComponent},
    { path: 'auth', component: AuthComponent },
    { path: 'activate', component: ActivateComponent },


    //dashboard
    {path:'dashboard',component:DashboardComponent},
    {path:'dashboard/categories',component:CategoriesComponent},
    {path:'dashboard/posts',component:PostsComponent},
    {path:'dashboard/posts/new',component:PostFormComponent},
    {path:'dashboard/users',component:UsersComponent},



    {path: '**',redirectTo: '',},





];



