import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APIResponse } from '../../model/response';

@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.css'
})
export class ActivateComponent {
  userId?: number;
  token?: string;
  ActivatedMessage?:string = "Activating your account, please wait...";

  constructor(private apiService: ApiService,    private route: ActivatedRoute) {
  }
  ngOnInit(){
    console.log('Activated');
    this.route.queryParams.subscribe(params => {
      this.userId = +params['userId'];
      this.token = params['token'];
      if (this.userId && this.token) {
        this.onActivate(this.userId, this.token);
      } else {

      }
    });
  }


  onActivate(userId:number,token:string) {
    console.log(userId);
    console.log(token);
    this.apiService.post('user/activate',{id :userId,token:token}).subscribe( (response) => {
      this.ActivatedMessage = "Activated Successfully..!"
      },
    (error) => {
      this.ActivatedMessage =  error.error.message
    });

  }
}
