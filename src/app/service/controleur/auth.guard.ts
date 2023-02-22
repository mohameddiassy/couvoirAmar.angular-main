import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ApiService,private routage:Router) { }
  async canActivate(): Promise<boolean> {
    var token= await this.api.get_token()
    console.log("token on guard= ",token)
    if (token!=undefined && token!=null) {
      console.log("Utilisateur connecté")
      await this.api.update_data_from_token()
      return true
    } else {
      console.log("Utilisateur non connecté")
      this.routage.navigate(['/public/login'])
      return false
    }
  }
  
}
