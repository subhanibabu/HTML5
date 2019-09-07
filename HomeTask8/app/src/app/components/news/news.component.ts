import { Component, OnInit, Input} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';
import { Posts } from '../../classes/post';
import { FormControl,FormGroup } from '@angular/forms';

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

  newsDetailsForm = new FormGroup({
    sources : new FormControl(''),
    searchText : new FormControl('')
    });

  constructor(private newsService:NewsService) {
    this.subscription = this.newsService.subject
    .subscribe(
      (posts: Posts[]) => {
        this.results = posts;
      }
    );
   }

   ngOnInit() {
    this.newsDetailsForm.get('sources').setValue('All Sources');
    this.results = this.newsService.getPosts();
  }

  changedvalue() {
    this.newsService.search(this.newsDetailsForm.get('sources').value);
  }

  filterText() {
    this.filterSource = this.newsDetailsForm.get('searchText').value;
  }

  sendSelectedItem(item:[]):void{  
    this.newsService.setSelectedNews = item;
  }
}
