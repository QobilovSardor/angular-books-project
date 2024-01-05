import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.services';
import { Card } from 'src/cardInterface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
})
export class DetailsComponent {
	card?: Card

	/**
	 * 
	 * @param route 
	 * @param cardService 
	 */
	constructor(private route: ActivatedRoute, private cardService: CardService) {
		const cardId: string = this.route.snapshot.params['id'];
		cardService.getCardId(+cardId).then((card) => {
			this.card = card
		});
	}

	/**
	 *
	 */
	form: FormGroup = new FormGroup({
		name: new FormControl(''),
		comment: new FormControl(''),
	})

	/**
	 * 
	 */
	submit() {
		this.cardService.sendData(this.form.value.name, this.form.value.comment)
	}

}