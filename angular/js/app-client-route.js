'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {templateUrl: 'partials/menu-server-view', controller: MenuCtrl}).

      when('/postAdd-server-view', {templateUrl: 'partials/postAdd-server-view', controller: PostAddCtrl}).
      when('/postRead-server-view/:id', {templateUrl: 'partials/postRead-server-view', controller: PostReadCtrl}).
      when('/postEdit-server-view/:id', {templateUrl: 'partials/postEdit-server-view', controller: PostEditCtrl}).
      when('/postDelete-server-view/:id', {templateUrl: 'partials/postDelete-server-view', controller: PostDeleteCtrl}).

      otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }]);
