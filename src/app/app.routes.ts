import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'category',component:SingleCategoryComponent},
    {path:'post',component:SinglePostComponent},
    {path:'about',component:HomeComponent},
    {path:'terms-conditions',component:TermsAndConditionComponent},
    {path:'contact',component:ContactUsComponent},
    { path: 'auth', component: AuthComponent },


    //dashboard
    {path:'dashboard',component:DashboardComponent },
    {path:'dashboard/categories',component:CategoriesComponent},
    {path:'dashboard/posts',component:PostsComponent},
    {path:'dashboard/users',component:UsersComponent},




    {path: '**',redirectTo: '',},





];



