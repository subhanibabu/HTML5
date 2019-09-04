import { Component, OnInit} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material';
import{ArticleComponent} from '../article/article.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  loggedInUserName: string;
  subscription: Subscription;

  constructor(private newsService:NewsService, public dialog: MatDialog) {
    this.loggedInUserName = newsService.getLoggedInUserName;
   }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ArticleComponent);
  }

  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
}
