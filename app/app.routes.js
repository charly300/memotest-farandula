(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/pages/start/start.html',
				controller: 'StartController',
				controllerAs: 'start',
			})
			.when('/game', {
				templateUrl: 'views/pages/game/game.html',
				controller: 'GameController',
				controllerAs: 'game',
			});
	}

})();