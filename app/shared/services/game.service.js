(function() {
	'use strict';

	angular
		.module('app')
		.service('game', Game);

	Game.$inject = ['$q', 'board'];

	function Game($q, board) {
		var self = this;
		self.board = board;
		self.players = [];
		
		self.start = function(params) {
			var defered = $q.defer();
			initBoard(params)
				.then(function() {
					initPlayers(params);
					defered.resolve();			
				}).catch(function(error){
					defered.reject(error);
				});
			return defered.promise;
		}

		function initPlayers(params) {
			for(var i = 0; i < params.cantPlayers; i++)
				self.players.push(new Player('Pepito' + i));
		}

		function initBoard(params) {
			return self.board.getCards();
		}
	}

})();