import { Component, OnInit, Input} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';
import { Posts } from '../../classes/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']  
})
export class NewsComponent implements OnInit {
  private results: object;
  
  subscription: Subscription;
  filterSource: string;
  @Input() emitValue: string;
  author: string;
  sources: string[] =  ['All Sources','cnn', 'bbc-news', 'cnbc', 'fortune', 'google-news', 'metro', 'mirror', 'talksport', 'time', 'the-hindu'];
  selectedSourceTitle = 'All Sources';
  searchText = '';

  constructor(private newsService:NewsService) {
    this.subscription = this.newsService.subject
    .subscribe(
      (posts: Posts[]) => {
        this.results = posts;
      }
    );
   }

   ngOnInit() {
    this.results = this.newsService.getPosts();
  }

  changedvalue(source: string) {
    this.newsService.search(source);
  }

  filterText(source: string) {
    this.filterSource = source;
  }

  sendSelectedItem(item:[]):void{  
    this.newsService.setSelectedNews = item;
  }
}
