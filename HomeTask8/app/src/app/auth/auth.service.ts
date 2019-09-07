import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedInUserName : string;
  constructor(private newsService : NewsService) { 
  }

  get showArticle(): boolean {
    this.loggedInUserName = this.newsService.getLoggedInUserName;
    if(this.loggedInUserName === 'admin')
      return true;
    else
      return false;
  }
}
