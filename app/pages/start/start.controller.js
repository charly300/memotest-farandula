(function() {
	'use strict';

	angular
		.module('app')
		.controller('StartController', StartController);

	StartController.$inject = ['$location', 'game'];

	function StartController($location, game) {
		var vm = this;
		
		vm.start = function() {
			game.start({
				cantPlayers: 2
			}).then(function() {
				$location.path('/game');
			}).catch(function(error) {
				console.error(error);
			});
		};
	}
	
})();