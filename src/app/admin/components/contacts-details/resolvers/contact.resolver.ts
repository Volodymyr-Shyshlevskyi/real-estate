import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, EMPTY, Observable } from 'rxjs';
import {ContactService} from '../../contacts/services/contact.service';
import {iContact} from '../../contacts/models/i-contact';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<iContact> {
  constructor(private userService: ContactService, private router: Router ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iContact> {
    return this.userService.getPerson(route.params?.['id']).pipe(
      catchError( () => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}