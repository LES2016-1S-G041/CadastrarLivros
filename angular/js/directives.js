'use strict';

/* Directives */

console.log("public/js/directives - inicio");

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
