import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  api_key = '4e622a95ca7f4c139c09107fed7ac5fc';

  constructor(private http: HttpClient) { }
  
  initArticles() {
    return this.http.get('https://newsapi.org/v2/everything?q=Internet&from=2021-06-15&language=es&sortBy=popularity&apiKey=' + this.api_key);
  }
}
