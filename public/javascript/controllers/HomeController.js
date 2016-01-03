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
		$scope.status = '  ';
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		vm.showTraveLaws = function() {
			vm.TraveLaws = true;
			vm.enterTraveLaws = false;
		}

		vm.leaveTraveLaws = function() {
			vm.TraveLaws = false;
			vm.enterTraveLaws = true;
		}

		$scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: HomeController,
      templateUrl: 'views/tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
	function DialogController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	}


	}
})();
