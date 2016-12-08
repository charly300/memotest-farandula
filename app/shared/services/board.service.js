(function() {
	'use strict';

	angular
		.module('app')
		.service('board', BoardService);

	BoardService.$inject = ['$http'];

	function BoardService($http) {
		var self = this;

		self.getCards = function() {
			return $http({
				method: 'GET',
				url: 'js/cards.json'
			}).then(function (response) {
				return self.cards = response.data;
			}).catch(function(error) {
				console.error(error);
			})
		}
	}
})();