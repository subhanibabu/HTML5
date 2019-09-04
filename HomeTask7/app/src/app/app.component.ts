import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  source:string;
  private results: object;

  constructor(private mainService:MainService) {
    this.source = "All Sources";
    this.mainService.search(this.source);  
   }
}
