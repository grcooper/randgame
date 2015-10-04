angular.module('app.menu', [])
.config(function($stateProvider) {
  // Our first state called `menu`
  $stateProvider
    .state('menu', {
      url: '',
      templateUrl: 'main.html',
      controller: 'MainController as mnCtrl'
    });
});