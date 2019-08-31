import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sources: string[] =  ['All Sources','cnn', 'bbc-news', 'cnbc', 'fortune', 'google-news', 'metro', 'mirror', 'talksport', 'time', 'the-hindu'];
  selectedSourceTitle = 'All Sources';
  loggedInUserName: string;
  searchText = '';
  subscription: Subscription;
  @Output() emitSourceValue = new EventEmitter<string>();
  @Output() emitfilterTextValue = new EventEmitter<string>();

  constructor(private newsService:NewsService) {
    this.loggedInUserName = newsService.getLoggedInUserName;
   }

  ngOnInit() {
  }
 
  selectChangedValue(source: string):void{    
    this.emitSourceValue.emit(source);
  }

  filterText():void{   
    this.emitfilterTextValue.emit(this.searchText);
  }

  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
}
