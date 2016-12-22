import {Card} from './card'

export class Board {
    constructor() {
        this.cards = []
        for(let i = 0; i < 5; i++) {
            this.cards.push(new Card(i))
            this.cards.push(new Card(i))
        }
    }
}