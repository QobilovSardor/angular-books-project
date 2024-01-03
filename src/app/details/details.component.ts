import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.services';
import { Card } from 'src/cardInterface';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
})
export class DetailsComponent {
	card?: Card
	/**
	 *
	 */
	constructor(private route: ActivatedRoute, private cardService: CardService) {
		const cardId: string = this.route.snapshot.params['id'];
		this.card = cardService.getCardId(+cardId);
	}
	
}