(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($state, HomeFactory,$scope, $mdDialog, $mdMedia) {
		var vm = this;
		vm.title = 'Welcome to TraveLaws';
		vm.showLaws = true;
		vm.States = HomeFactory.States;
		vm.TraveLaws = false;
		vm.enterTraveLaws = true;
// adding dialog
vm.announceClick = function(index) {
	$mdDialog.show(
		$mdDialog.alert('Hello World')

	);
};

		vm.showTraveLaws = function() {
			vm.TraveLaws = true;
			vm.enterTraveLaws = false;
		}

		vm.leaveTraveLaws = function() {
			vm.TraveLaws = false;
			vm.enterTraveLaws = true;
		}



	}
})();
