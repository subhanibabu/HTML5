import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.scss']
})
export class NewsdetailsComponent implements OnInit {
  private item: [];

  constructor(private newsService:NewsService) { 
    this.item = newsService.getSelectedNews;
  }

  ngOnInit() {
  }
}
