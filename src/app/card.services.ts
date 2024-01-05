import { Injectable } from "@angular/core";
import { Card } from "src/cardInterface";

@Injectable({ providedIn: 'root', })

export class CardService {
	/**
	 * 
	 */
	url = 'http://localhost:3000/cards'


	async getCardService(): Promise<Card[]> {
		const data = await fetch(this.url)
		return ((await data.json()) ?? [])
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	async getCardId(id: number) {
		const data = await fetch(`${this.url}/${id}`);
		return await data.json() ?? [];
	}

	/**
	 * 
	 * @param name 
	 * @param comment 
	 */
	sendData(name: string, comment: string) {
		alert(`${name}: ${comment}`)
	}
}