import {Player} from './player'
import {Board} from './board'
import {inject} from 'aurelia-framework'

@inject(Board)
export class Game {
    constructor(board) {
        this.board = board
        this.turn = 0
    }

    start(player1, player2) {
        this.players = new Array(player1, player2)
    }

    select(card) {
        this.players[this.turn].select(card)
    }

    changeTurn() {
        this.turn = 1 - this.turn
    }
}