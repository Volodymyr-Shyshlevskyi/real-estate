import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NewsService } from 'src/app/admin/components/news/services/news.service';
import { INews } from './models/i-news';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsList().subscribe();
  }

}