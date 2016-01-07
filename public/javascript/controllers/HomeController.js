(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController($state, HomeFactory,$scope, $mdDialog, $mdMedia) {
		var vm = this;
		vm.title = 'TraveLaws';
		vm.showLaws = true;
		vm.States = HomeFactory.States;
		vm.TraveLaws = true;
		vm.showCamping = false;
		vm.showAbout = false;
		// vm.enterTraveLaws = true;
// adding dialog
vm.announceClick = function(index) {
	$mdDialog.show(
		$mdDialog.alert('Hello World')

	);
};

		vm.showCamp = function() {
			vm.TraveLaws = false;
			vm.showCamping = true;
		}

		vm.Home = function() {
			vm.TraveLaws = true;
			vm.showCamping = false;
			vm.showAbout = false;
		}



	}
})();
