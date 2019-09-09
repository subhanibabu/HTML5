import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private newsService : NewsService) { 
  }

  get showArticle(): boolean {
    return this.newsService.getLoggedInUserName === 'admin';
  }
}
