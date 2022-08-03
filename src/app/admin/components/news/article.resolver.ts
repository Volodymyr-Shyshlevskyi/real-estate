import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { INews } from './models/i-news';
import { NewsService } from './services/news.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<INews> {
  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<INews> {
    return this.newsService.getArticle(route.params?.['id']);
  }
}
