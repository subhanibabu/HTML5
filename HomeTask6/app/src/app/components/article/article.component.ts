import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  subscription: Subscription;
  addArticleForm = new FormGroup({
  heading : new FormControl(''),
  date : new FormControl(''),
  description : new FormControl(''),
  author : new FormControl(''),
  content : new FormControl(''),
  sourceURL : new FormControl('')
  });
  constructor() { }

  ngOnInit() {
    
  }
  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
  updateArticle()
  {
    console.log('Entered details are: ' + JSON.stringify(this.addArticleForm.value));
  }
}
