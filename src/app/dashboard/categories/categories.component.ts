import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiStoreService } from '../../api/api.store.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule, SidebarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  editMode: boolean = false;
  add:boolean = false;
  editCategory: any = null;

  constructor(protected store:ApiStoreService) {}



  onEdit(category: any): void {
    this.editMode = true;
    this.editCategory = category;
    this.add = true;

  }
  onDelete(id: number): void {
    this.store.deleteCategory(id)
  }
  onCancelEdit(): void {
    this.editMode = false;
    this.editCategory = null;
    this.add = false;

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
      this.add = false;
    }
  }
  onAdd(){
    this.add = true;
  }
}
