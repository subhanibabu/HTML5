import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl,FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { NewsService } from '../../services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  subscription: Subscription;
  addArticleForm = new FormGroup({
    title : new FormControl(''),
    publishedAt : new FormControl(''),
    description : new FormControl(''),
    author : new FormControl(''),
    content : new FormControl(''),
    urlToImage : new FormControl('')
  });
  constructor(public dialog: MatDialog, private newsService:NewsService,private router: Router) { }

  ngOnInit() {    
  }
  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
  onSubmit()
  {
    this.newsService.insertPost(this.addArticleForm.value);
    this.dialog.closeAll();
    this.router.navigate(['News']);
  }

  closedialog()
  {
    this.dialog.closeAll();
  }
}
