import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);  // inject serve al posto del costruttore per gli standalone

  const isLoggedIn=localStorage.getItem('authToken');


  if (!isLoggedIn) {
    // Reindirizza alla pagina di login se non loggato
    router.navigate(['/login']);
    return false; 
  }

  return true;  //consenti accesso
};

// applico guards alle rotte sull app routing module