import { Component, OnInit} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material';
import{ArticleComponent} from '../article/article.component';
import { AuthGuard } from '../../auth/auth.guard';
import { AdService } from '../dynamicAds/ad.service';
import { AdItem } from '../dynamicAds/ad-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  loggedInUserName: string;
  subscription: Subscription;
  ads: AdItem[];

  constructor(private newsService:NewsService, public dialog: MatDialog,private adminGuard: AuthGuard,private adService: AdService) {
    this.loggedInUserName = newsService.getLoggedInUserName;
   }

  ngOnInit() {
    this.ads = this.adService.getAds();
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
