import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl,FormGroup, Validators } from '@angular/forms';
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
    title : new FormControl('', Validators.required),
    publishedAt : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    author : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    urlToImage : new FormControl('', Validators.required)
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
