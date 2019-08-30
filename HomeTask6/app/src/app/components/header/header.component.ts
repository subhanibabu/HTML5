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
  searchText = '';
  subscription: Subscription;
  @Output() emitValue = new EventEmitter<string>();
  @Output() filterTextValue = new EventEmitter<string>();

  constructor(private newsService:NewsService) {
   }

  ngOnInit() {
  }
 
  selectChangedValue(source: string):void{    
    this.emitValue.emit(source);
  }

  filterText():void{   
    this.filterTextValue.emit(this.searchText);
  }

  ngOnDestroy() {
    if(this.subscription){
      // prevent memory leak when component destroyed
      this.subscription.unsubscribe();
    }
  }
}
