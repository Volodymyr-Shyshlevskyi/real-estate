import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {iContact} from '../models/i-contact';
import {ContactService} from '../services/contact.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<iContact[]> {

  constructor(private userService: ContactService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iContact[]> {
    return this.userService.getPersonalList();
  }
}