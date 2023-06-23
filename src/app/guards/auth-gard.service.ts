import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ParametresService } from './../services/parametres.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private paramService: ParametresService) { }

  async canActivate() {
    var token = this.paramService.getToken();
    if (await token) {
      return true;
    } else {
      return false;
    }
  }
}
