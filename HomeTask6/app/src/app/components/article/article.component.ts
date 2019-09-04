import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  subscription: Subscription;
  addArticleForm = new FormGroup({
  heading : new FormControl('', Validators.required),
  date : new FormControl('', Validators.required),
  description : new FormControl('', Validators.required),
  author : new FormControl('', Validators.required),
  content : new FormControl('', Validators.required),
  sourceURL : new FormControl('', Validators.required)
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
