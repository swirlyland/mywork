'use strict';

/**
 * @ngdoc function
 * @name faceOneeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the faceOneeApp
 */

var app=angular.module('login', ['faceOneeApp','ngRoute']);

app.service('Session', function () {
  this.create = function (sessionId, userId) {
    this.id = sessionId;
    this.userId = userId;
  };
  this.destroy = function () {
    this.id = null;
    this.userId = null;
  };
  return this;
});

app.factory('AuthService', function ($http, Session) {
  var authService = {};
  authService.login = function (credentials) {
    return $http
      .post('/login', credentials)
      .then(function (res) {
        Session.create(res.data.id, res.data.user.id);
        return res.data.user;
      });
  };
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
  return authService;
});

app.controller('LoginCtrl', function ($scope, AuthService) {
  $scope.credentials = {
    uname: '',
    pword: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials);
  };
  $scope.signIn = function() {
    setTimeout(function() {
      console.log('Mocking a server response for user ' + $scope.userId + ' : ' + $scope.password + ' signin action');
      appModel.save({ user: { userId: $scope.userId, password: $scope.password }});
      window.location.href = 'home.html';
    }, 1000);
  };
});
