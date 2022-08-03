import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { INews } from '../models/i-news';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article$: Observable<INews>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article$ = this.route.data.pipe(map((data) => data?.['article'] ))
  }

}
