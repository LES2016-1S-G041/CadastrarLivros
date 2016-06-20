'use strict';

/* Controllers */

function MenuCtrl($scope, $http) {
  $http.get('/api/posts').success(function(data, status, headers, config) {
      $scope.posts = data.posts;
  });
}

function PostAddCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {$http.post('/api/post', $scope.form).success(function(data) {$location.path('/'); });};
}

function PostReadCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

function PostEditCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) { console.log('successEdit');
      $scope.form = data.post;
    });

  $scope.postEdit = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/postRead/' + $routeParams.id);
      });
  };
}

function PostDeleteCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.postDelete = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}
