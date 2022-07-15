import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = 'http://localhost:8081/public/messages';
   
  constructor(private httpClient: HttpClient) { }
  
  getMessages(){
    return this.httpClient.get(this.url);
  }
  
  create(message: Post) {

    this.httpClient.post<Post>(this.url, message)
        .subscribe(response => {
        });
        
}
}