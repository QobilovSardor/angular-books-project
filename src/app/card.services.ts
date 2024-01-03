import { Injectable } from "@angular/core";
import { Card } from "src/cardInterface";

@Injectable({ providedIn: 'root', })

export class CardService {
	private cards: Card[] = [
		{
			id: 1,
			cardTitle: 'Atomic Habits',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			id: 2,
			cardTitle: 'O\'tkan kunlar',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://upload.wikimedia.org/wikipedia/uz/8/81/O%CA%BBtgan_kunlar.jpg'
		},
		{
			id: 3,
			cardTitle: 'O\'lsang kim yig\'laydi',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://assets.asaxiy.uz/product/items/desktop/045117b0e0a11a242b9765e79cbf113f2023081213201535603gCSKFPE1AS.jpg'
		},
		{
			id: 4,
			cardTitle: 'Tasodif bilan aldanganlar',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://olcha.uz/image/400x400/products/2022-09-21/nassim-nikolas-taleb-tasodif-bilan-aldanganlar-122325-0.jpeg'
		},
		{
			id: 5,
			cardTitle: 'Seni sevaman dema sev',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://assets.asaxiy.uz/product/items/desktop/bfd2308e9e75263970f8079115edebbd2022091917491666916tRSfDj6hBS.png.webp'
		},
		{
			id: 6,
			cardTitle: 'Ikigai',
			cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			cardButtonName: 'Buy now',
			cardPrice: 100000,
			cardImg: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/814L+vq01mL._AC_UF1000,1000_QL80_.jpg'
		},
	]

	getCardService() {
		return this.cards
	}

	getCardId(id: number) {
		return this.cards.find((itemId) => itemId.id === id)
	}
}