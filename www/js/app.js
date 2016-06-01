// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'LoginController'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'LoginController'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'templates/users.html',
      controller: 'UserController'
    })
    .state('user', {
      url: "/users/:userId",
      templateUrl: "templates/user.html",
      controller: "UserController"
    })
    .state('group', {
      url: "/group",
      templateUrl: "templates/group.html",
      controller: "GroupController"
    });
  $urlRouterProvider.otherwise('/signup');
});

// controllers
app.controller("UserController", function($scope, $stateParams) {

  // $stateParams.userId;

});

app.controller("LoginController", function($scope, $stateParams) {

  // $stateParams.userId;

});

app.controller("GroupController", function($scope, $stateParams) {

  // $stateParams.userId;

});


