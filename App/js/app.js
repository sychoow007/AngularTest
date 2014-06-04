'use strict';

var angularApp = angular.module('angularApp', ['ngResource','ngGrid','ui.bootstrap','ui.router']);

//define routes
angularApp.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    //$routeProvider.when('/absence',{templateUrl: '/partials/absences.html',controller: 'AbsenceController'});
    //$routeProvider.when('/absence/new',{templateUrl: '/partials/newAbsence.html', controller: 'EditAbsenceController'});
    //$routeProvider.when('/login',{templateUrl: '/partials/login.html', controller: 'LoginController'});
    //$routeProvider.when('/register',{templateUrl: '/partials/register.html', controller: 'RegisterController'});
    //$routeProvider.when('/users',{templateUrl: '/partials/users.html', controller:'UserController'});


    //avoid # in url
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("absences");

    // Now set up the states
    $stateProvider
        .state('absence', {
            url: "absences",
            controller: "AbsenceController",
            templateUrl: "app/partials/absences.html"
        })
        .state('absence.edit', {
            url: "editAbsence",
            controller: "EditAbsenceController",
            templateUrl: "app/partials/absence.new.html"
            //controller: function($scope) {
            //    $scope.items = ["A", "List", "Of", "Items"];
            //}
        })
        .state('users', {
            url: "users",
            controller: "UserController",
            templateUrl: "app/partials/users.html"
        })
        .state('login', {
            url: "login",
            controller: "LoginController",
            templateUrl: "app/partials/login.html"
        })
        .state('register', {
            url: "register",
            controller: "RegisterController",
            templateUrl: "website/partials/register.html"
        });
//});
}]);
