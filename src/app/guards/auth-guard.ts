import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authData = localStorage.getItem('auth');
  // const isAuthenticated = authData && JSON.parse(authData) === true;

  if (!authData) {
    router.navigate(['/login']);
    return false; // المستخدم داخل ✅
  } else {
  // const isAuthenticated = authData ? JSON.parse(authData) === true : false;
    return true;
  }
};





