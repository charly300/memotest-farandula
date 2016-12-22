export class Card {
    constructor(value) {
        this.value = value
        this.selected = false
        this.selectable = true
    }

    reverse() {
        this.selected = false
    }

    select() {
        this.selected = true
    }

    match() {
        this.selected = true
        this.selectable = false
    }
}