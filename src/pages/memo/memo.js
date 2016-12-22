import {Game} from './../../app/game'
import {Router} from 'aurelia-router'
import {inject} from 'aurelia-framework'

@inject(Router, Game)
export class Memo {
    constructor(router, game) {
        this.router = router
        this.game = game
    }
    activate(params) {
        if(!this.game.players)
            this.router.navigate('')
    }
    select(card) {
        this.game.select(card)
    }
}