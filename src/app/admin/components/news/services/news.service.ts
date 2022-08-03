import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INews } from '../models/i-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = `${environment.apiUrl}/news`
  
  newsList$: BehaviorSubject<INews[]> = new BehaviorSubject([] as INews[]);

  constructor(private http: HttpClient) {
  }

  getNewsList(){
    return this.http.get<INews[]>(this.apiUrl).pipe(
      tap((data: INews[]) => this.newsList$.next(data))
    );
  }

  getArticle(id: number) {
    return this.http.get<INews>(`${this.apiUrl}/${id}`);
  }

}
