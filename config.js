angular
.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider)
{
	$stateProvider
	.state('home', {
		name: 'home',
		url: '/home',
		templateUrl: '/templates/health.html',
		controller: 'HealthController'
	})
	$urlRouterProvider.otherwise('/home');
});