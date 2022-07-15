import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-show-mes',
  templateUrl: './show-mes.component.html',
  styleUrls: ['./show-mes.component.scss']
})
export class ShowMesComponent implements OnInit {

  constructor(private service:SharedService) { }

  posts: Post[] | undefined;

  ngOnInit(): void {
    this.posts = [{
    
      "shortId": 1,
      "headline": "Viktigt att meddela oss om något ändras",
      "text": "Det är viktigt att du meddelar CSN om något förändras. Om du inte gör det kan du bli tvungen att betala tillbaka pengar som du inte hade rätt till. Ibland räcker det att du anmäler ändringen till din skola så meddelar de CSN. Ändringar som kan påverka dina bidrag från CSN: 1. Du ändrar studietakt från heltid till deltid 2. Du byter utbildning eller skola 3. Du är frånvarande från studierna 4. Du avbryter studierna 5. Du har inackorderingstillägg men väljer att flytta hem 6. Du har extra tillägg och din eller dina föräldrars inkomst ändras",
      "hyperlink": "https://www.csn.se/bidrag-och-lan/studiestod/bidrag-for-gymnasiestudier-i-sverige.html#h-Viktigtattmeddelaossomnagotandras",
      "author": "CSN",
      "startDate": "2022-01-01",
      "endDate": "2030-12-12",
      "publishingDate" : "2030-12-12",
  },
  {
    "shortId": 2,
    "headline": "Vasdasdasdascascasc",
    "text": "Det är viktigt att du meddelar CSN om något förändras. Om du inte gör det kan du bli tvungen att betala tillbaka pengar som du inte hade rätt till. Ibland räcker det att du anmäler ändringen till din skola så meddelar de CSN. Ändringar som kan påverka dina bidrag från CSN: 1. Du ändrar studietakt från heltid till deltid 2. Du byter utbildning eller skola↵ 3. Du är frånvarande från studierna 4. Du avbryter studierna↵ 5. Du har inackorderingstillägg men väljer att flytta hem 6. Du har extra tillägg och din eller dina föräldrars inkomst ändras",
    "hyperlink": "https://www.csn.se/bidrag-och-lan/studiestod/bidrag-for-gymnasiestudier-i-sverige.html#h-Viktigtattmeddelaossomnagotandras",
    "author": "CSN",
    "startDate": "2030-12-12",
    "endDate": "2030-12-12",
    "publishingDate" : "2030-12-12"
  },
  {
    "shortId": 2,
    "headline": "Vasdasdasdascascasc",
    "text": "Det är viktigt att du meddelar CSN om något förändras. Om du inte gör det kan du bli tvungen att betala tillbaka pengar som du inte hade rätt till. Ibland räcker det att du anmäler ändringen till din skola så meddelar de CSN.↵↵Ändringar som kan påverka dina bidrag från CSN:↵↵ 1. Du ändrar studietakt från heltid till deltid↵ 2. Du byter utbildning eller skola↵ 3. Du är frånvarande från studierna↵ 4. Du avbryter studierna↵ 5. Du har inackorderingstillägg men väljer att flytta hem↵ 6. Du har extra tillägg och din eller dina föräldrars inkomst ändras",
    "hyperlink": "https://www.csn.se/bidrag-och-lan/studiestod/bidrag-for-gymnasiestudier-i-sverige.html#h-Viktigtattmeddelaossomnagotandras",
    "author": "CSN",
    "startDate": "2030-12-12",
    "endDate": "2030-12-12",
    "publishingDate" : "2030-12-12"
  },

];


}

}
