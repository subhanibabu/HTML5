import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  source:string;
  private results: object;

  constructor(private mainService:MainService) {
    this.source = "All Sources";
    this.mainService.search(this.source);  
   }
   ngOnInit() {
  }
}
