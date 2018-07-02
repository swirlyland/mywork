'use strict';

/**
 * @ngdoc function
 * @name faceOneeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the faceOneeApp
 */
var app=angular.module('main', ['faceOneeApp','ngAnimate','ngRoute','ngResource']);

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('MainCtrl', function () {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
