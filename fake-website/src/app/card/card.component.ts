import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  headline: string;
  text: string;

  @Input() card?: CardComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
