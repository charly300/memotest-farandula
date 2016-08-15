(function() {
	'use strict';

	angular
		.module('app')
		.service('game', GameService);

	function GameService() {
		var self = this;
		self.players = [];
		
		self.start = function(params) {
			for(var i = 0; i < params.cantPlayers; i++)
				self.players.push(new Player('Pepito' + i));	
		}
	}

})();