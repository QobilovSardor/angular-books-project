import { Component } from '@angular/core';
import { Card } from 'src/cardInterface';
import { CardService } from '../card.services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;
	/**
	 * 
	 */

	filtredProducts!: Card[];

	constructor(
		private cardService: CardService,
		private router: Router) {
		this.filtredProducts = cardService.getCardService();
	}
	/**
	 * 
	 * @param text 
	 */
	searchFunc(text: string) {
		this.filtredProducts = this.cardService.getCardService().filter((item) =>
			item.cardTitle.toLowerCase().includes(text.toLocaleLowerCase())
		)
	}

	/**
	 * 
	 */
	navigateToDetaile(cardId: number) {
		this.router.navigate(['/details', cardId]);
	}
}
