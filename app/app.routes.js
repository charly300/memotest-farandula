(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/pages/start.html',
				controller: 'AppController',
				controllerAs: 'app',
			});
	}

})();