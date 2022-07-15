import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:8081/public/messages";

  constructor(private http:HttpClient) { }

  getMesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
}

//Kan lägga in update delete add osv senare. 