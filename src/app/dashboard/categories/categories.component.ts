import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api/api.service';
import { APIResponse } from '../../model/response';
import { Category } from '../../model/category';
import { ApiStoreService } from '../../api/api.store.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  editMode: boolean = false;
  editCategory: any = null;

  constructor(protected store:ApiStoreService) {}



  onEdit(category: any): void {
    this.editMode = true;
    this.editCategory = category;
  }
  onDelete(id: number): void {
    this.store.deleteCategory(id)
  }
  onCancelEdit(): void {
    this.editMode = false;
    this.editCategory = null;
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newCategory = { name: form.value.category, posts: [] };
      if (this.editMode) {
        this.editCategory.name = newCategory.name;
        this.store.UpdateCategory(this.editCategory)
        this.editMode = false
        this.editCategory = null
      } else {
        this.store.SubmitCategory(newCategory)
      }
      form.reset();
    }
  }
}
