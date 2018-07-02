'use strict';

/**
 * @ngdoc overview
 * @name faceOneeApp
 * @description
 * # faceOneeApp
 *
 * Main module of the application.
 */
var app= angular.module('faceOneeApp', ['ngCookies']);

app.config(function ($cookiesProvider) {
  $cookiesProvider.defaults.path = '/';
});

app.factory('appModel', function () {
  var AppModel = function() {

  };
  AppModel.prototype.init = function (storage) {
    this.storage = storage;
    var data = this.storage.get('data');
    if (data != null) {
      this.save(data);
    }
    return this;
  };
  AppModel.prototype.save = function (data) {
    this.data = data;
    this.storage.put('data', data);
  };
  AppModel.prototype.clear = function () {
    this.data = null;
    this.storage.remove('data');
  };
  return new AppModel();
});

app.factory('appManager', function() {

  return {
    init: function ($cookieStore, $scope, appModel, shouldClear) {
      var model = appModel.init($cookieStore);
      if (shouldClear == true) {
        model.clear();
      }
      $scope.model = model;
    }
  }
});
