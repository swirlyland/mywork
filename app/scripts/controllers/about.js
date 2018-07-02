'use strict';

/**
 * @ngdoc function
 * @name faceOneeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the faceOneeApp
 */
angular.module('about', ['faceOneeApp'])
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
