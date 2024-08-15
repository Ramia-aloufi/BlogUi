import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DecodedToken } from './DecodedToken';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userName: string | null = null;
  private role: string | null = null;
  private userId: number | null = null;


  constructor(private cookieService: CookieService) {}

  setToken(token: string): void {
    this.cookieService.set('authToken', token, { secure: true, sameSite: 'Strict' });
  }
  getToken() {
    const token = this.cookieService.get('authToken');
    if (token) {
      var userdata =  jwtDecode<DecodedToken>(token);
      this.userName = userdata.unique_name
      this.role = userdata.role
      this.userId = Number(userdata.nameid)
    }
  }
  

  deleteToken(): void {
    this.cookieService.delete('authToken');
    this.userName = null
  }

  getUserName(): string | null {
    return this.userName;
  }
  getUserRole(): string | null {
    return this.role;
  }
  getUserId(): number | null {
    return this.userId;
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('authToken');
  }
}
