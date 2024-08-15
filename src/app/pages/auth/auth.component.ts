import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from '../../model/response';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  signUpForm: FormGroup;
  loginForm: FormGroup;


  isLogin: boolean = true;

  constructor(private apiService: ApiService,private fb: FormBuilder, private authService:AuthService,private router: Router) {
    this.signUpForm = this.fb.group({
      name: [ '', Validators.required],
      email: ['', Validators.required],
      password: [ "", Validators.required],
      confirmPassword: [ "", Validators.required]
    });
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: [ "", Validators.required],
    });
   }

  showLogin() {
    this.isLogin = true;
  }

  showSignup() {
    this.isLogin = false;
  }
  onLogin(){
    this.apiService.post<{token:string,name:string}>('user/login',this.loginForm.value).subscribe( (response) => {
      console.log(response.token);
      this.authService.setToken(response.token)
      this.authService.getToken()  
      this.router.navigate(['/']);
    
      },
    (error) => {
      console.error('Error fetching categories:', error);
    });


  }


  onSignup() {
    this.apiService.post('user/signup',this.signUpForm.value).subscribe( (response) => {
      console.log(response);
      },
    (error) => {
      console.error('Error fetching categories:', error);
    });

  }
  
}
