import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {iContact} from '../models/i-contact';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = `${environment.apiUrl}/contacts`

  usersList$: BehaviorSubject<iContact[]> = new BehaviorSubject([] as iContact[]);

  constructor(private http: HttpClient) {
  }

  getPersonalList(){
    return this.http.get<iContact[]>(this.apiUrl).pipe(
      tap((data: iContact[]) => this.usersList$.next(data.sort((a,b) => b.id - a.id))),
    );
  }

  getPerson(id: number) {
    return this.http.get<iContact>(`${this.apiUrl}/${id}`);
  }

  deletePerson(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        this.usersList$.next(this.usersList$.getValue().filter(el => el.id !== id));
      })
    );
  }

  addNewPerson(newUser: iContact) {
    return this.http.post<iContact>(this.apiUrl, newUser).pipe(
      tap((user) => {
        this.usersList$.next([user].concat(this.usersList$.getValue()))
      })
    )
  }
}