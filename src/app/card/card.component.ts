import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Card } from "src/cardInterface";

@Component({
	selector: 'card',
	templateUrl: './card.component.html'
})

export class CardComponent {
	@Input()
	card!: Card
}