(function() {
	'use strict';

	angular
		.module('app')
		.controller('GameController', GameController);

	GameController.$inject = ['game'];

	function GameController(game) {
		var vm = this;
		vm.players = game.players;
	}
	
})();