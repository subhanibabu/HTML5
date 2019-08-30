import { Injectable,EventEmitter } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  results: Observable<{}>;
  baseUrl:string = "https://newsapi.org/";
  apiURL: string;
  subject: Subject<string> = new Subject<string>();
  author: [];

   constructor(private http : HttpClient) {
  }
  
  search(source:string): Observable<{}> {

    if(source ==='All Sources')
    {
      source="techcrunch";
      this.apiURL = `${this.baseUrl}v2/top-headlines?sources=${source}&apiKey=3965cc2342c54e7caa002ab6bf398348`;
    }
    else{
      this.apiURL = `${this.baseUrl}v1/articles?source=${source}&apiKey=3965cc2342c54e7caa002ab6bf398348`;
    }
    this.results = this.http.get(this.apiURL);   
    return this.results
  }

  public setAuthor(author: []): void {
    this.author = author;
}

  get getAuthor(): [] {
    return this.author;
  }
}
