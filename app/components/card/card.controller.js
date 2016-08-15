(function () {
	'use strict';

	angular
		.module('app')
		.controller('CardController', CardController);

	function CardController() {
		var vm = this;
		this.title = 'Card';
	}
	
})();