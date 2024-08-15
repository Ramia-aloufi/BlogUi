import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiStoreService } from '../../api/api.store.service';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent  {
  selectedCategoryId?:number 
  constructor(protected store: ApiStoreService) { 
  }
  filterPost(id:number){
    this.selectedCategoryId = id;
    this.store.filterByPost(id)
  }
  reset(){
    this.selectedCategoryId = undefined
    this.store.resetFilterPosts();
  }
  getColor(id:number){
    if(id == this.selectedCategoryId){
      return 'text-[#4a4a81]'
    }else{
      return 'text-[#666]'
    }
  }

}
