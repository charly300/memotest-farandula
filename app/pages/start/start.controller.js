(function() {
	'use strict';

	angular
		.module('app')
		.controller('StartController', StartController);

	function StartController() {
		var vm = this;

		vm.title = 'Start';
	}
	
})();