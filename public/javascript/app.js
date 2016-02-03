(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('Laws',{
			url: '/states_laws',
			templateUrl: 'views/Laws.html'
		}).state('Camping',{
			url: '/camping',
			templateUrl: 'views/Camp.html'
		}).state('About',{
			url: '/about',
			templateUrl: 'views/About.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
