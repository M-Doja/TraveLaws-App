(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($state, HomeFactory,$scope, $mdDialog, $mdMedia) {
		var vm = this;
		vm.title = 'TravState';
		vm.States = HomeFactory.States;
// adding dialog
vm.announceClick = function(index) {
	$mdDialog.show($mdDialog.alert('Hello World'));
};





	}
})();
