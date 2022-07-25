import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ApiResponse } from './ApiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 
  title = 'fake-website';
  selectedCard: CardComponent = new CardComponent;
  url: string = "http://localhost:4200/public/messages";
  messages: any;
  /*htmlToAdd: any = '<app-card [card]="selectedCard" class="card"></app-card>';*/

  constructor(private _http: HttpClient) {}

  public apiResponse: ApiResponse | undefined;

  ngOnInit() {
    this._http.get<ApiResponse>(this.url)
      .subscribe({
        next: (data: ApiResponse) => {
          this.apiResponse = data;
        }
      })
  }
}




