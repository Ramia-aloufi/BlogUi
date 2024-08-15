import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  authService.getToken()
  const role = authService.getUserRole()
  const router = inject(Router);
  if (role === 'admin') { 
    router.navigate(['/dashboard'])
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
