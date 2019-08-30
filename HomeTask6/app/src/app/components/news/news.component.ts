import { Component, OnInit, Input} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']  
})
export class NewsComponent implements OnInit {
  private results: [];
  private source:string;
  subscription: Subscription;
  filterSource: string;
  @Input() emitValue: string;
  author: string;
  
  constructor(private newsService:NewsService) {
    this.source="All Sources";
      this.getNews(this.source);
   }

  ngOnInit() {
  }

  getNews(term:string) {
      this.subscription = this.newsService.search(term).subscribe( data => {
      this.results = data['articles'];
    });
  }

  changedvalue(source: string) {
    this.getNews(source);
  }

  filterText(source: string) {
    this.filterSource = source;
  }

  setAuthor(author:[]):void{  
    this.newsService.setAuthor(author);
  }

  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
}
