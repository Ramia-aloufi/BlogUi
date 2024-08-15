import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string | null = null;

  constructor(protected authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.authService.getToken()
    if (this.authService.isLoggedIn()) {
      this.userName = this.authService.getUserName();
      
    }
  }
  logOut(){
    this.authService.deleteToken();
    this.router.navigate(['/']);

  }
  
}
