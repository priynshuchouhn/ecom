import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-desc-card',
  templateUrl: './offer-desc-card.component.html',
  styleUrls: ['./offer-desc-card.component.css']
})
export class OfferDescCardComponent {

  @Input() imagePath: string = '';
  @Input() offer: string = '';
  @Input() description: string = '';

}
