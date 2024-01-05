import { Component } from '@angular/core';
import { Card } from 'src/cardInterface';
import { CardService } from '../card.services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})

export class HomeComponent {
	/**
	 * 
	 */

	filtredProducts!: Card[];

	cards!: Card[];

	constructor(
		private cardService: CardService,
		private router: Router) {
		cardService.getCardService().then((card) => {
			this.cards = card;
			this.filtredProducts = card;
		});
	}
	/**
	 * 
	 * @param text 
	 */
	searchFunc(text: string) {
		this.filtredProducts = this.cards.filter((item) => (
			item.cardTitle.toLowerCase().includes(text.toLowerCase())
		))
	}

	/**
	 * 
	 */
	navigateToDetaile(cardId: number) {
		this.router.navigate(['/details', cardId]);
	}
}
