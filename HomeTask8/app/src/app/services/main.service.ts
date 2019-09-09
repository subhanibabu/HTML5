import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts} from '../classes/post'
import { map } from 'rxjs/operators';
import { NewsService} from '../services/news.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  results: Observable<{}>;
  baseUrl:string = "https://newsapi.org/";
  apiURL: string;
  items: [];
  loggedInUserName : string;
  subject = new Subject<Posts[]>();
  private postsData: Posts[];

   constructor(private http : HttpClient, public newsService : NewsService) {
  }
 
  search(source:string){

    if(source ==='All Sources')
    {
      source="techcrunch";
      this.apiURL = `${this.baseUrl}v2/top-headlines?sources=${source}&apiKey=3965cc2342c54e7caa002ab6bf398348`;
    }
    else{
      this.apiURL = `${this.baseUrl}v1/articles?source=${source}&apiKey=3965cc2342c54e7caa002ab6bf398348`;
    }

    this.http.get<Posts[]>(this.apiURL)
    .pipe(
      map(data => {
        // tslint:disable-next-line: no-string-literal no-shadowed-variable
        return data['articles'].map(data => {
          return {
            ...data
          };
        });
      })
    )
    .subscribe(postData => {
      this.newsService.setPosts(postData);;
    });
  }
}
