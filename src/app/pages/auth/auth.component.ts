import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin: boolean = true;

  loginEmail: string = '';
  loginPassword: string = '';

  signupName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  signupConfirmPassword:string = '';

  constructor(private apiService: ApiService) { }

  showLogin() {
    this.isLogin = true;
  }

  showSignup() {
    this.isLogin = false;
  }
  onLogin(){}


  onSignup() {
    var newUser = {
      name:this.signupName,
      email:this.signupEmail,
      password:this.signupPassword,
      confirmPasword:this.signupConfirmPassword
    }
    this.apiService.post('user/signup',newUser).subscribe( (response) => {
      console.log(response);
      },
    (error) => {
      console.error('Error fetching categories:', error);
    });

  }
}
