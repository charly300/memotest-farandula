(function() {
	'use strict';

	angular
		.module('app')
		.component('card', {
			templateUrl: 'views/components/card/card.html',
			controller: 'CardController',
			controllerAs: 'card',
		});
})();