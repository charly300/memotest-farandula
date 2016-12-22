export class Player {
    constructor(name) {
        this.name = name
        this.score = 0
    }

    select(card) {
        if(!card.selectable) return;
        card.select()
        if(this.selected)
            this.compare(this.selected, card)
        else
            this.selected = card
    }

    compare(card1, card2) {
        if(card1.value == card2.value)
            this.matchCards(card1, card2)
        else
            this.notMatchCards(card1, card2)
        this.selected = null
    }

    notMatchCards(card1, card2) {
        card1.reverse()
        card2.reverse()
    }

    matchCards(card1, card2) {
        card1.match()
        card2.match()
        this.score += 1
    }
}