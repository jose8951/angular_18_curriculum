import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  try {
    // Verifica si estás en el navegador
    const isBrowser =
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined';
    const autenticado =
      isBrowser && localStorage.getItem('usuarioAutenticado') === 'true';

    if (autenticado) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    router.navigate(['/login']);
    return false;
  }
};
