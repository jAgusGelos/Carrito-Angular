import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  // Protege a todos los componentes que requieren autenticación
  // Mejora la UX

  constructor(private accountService: AccountService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.accountService.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['/clientes']);
      return false;
    }
  }
}
