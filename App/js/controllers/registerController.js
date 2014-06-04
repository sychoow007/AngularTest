'use strict';

angularApp.controller('RegisterController',
function RegisterController($scope,authService, userData, $location){
    $scope.user = {};

    //check for user and fill up user object
    $scope.$watch(function(){
        return authService.getCurrentUserName();
    },function(){
        $scope.user = authService.getCurrentUser();
    });

    $scope.isAuthenticated = function(){
        return authService.isAuthenticated();
    };

    $scope.registerUser = function(user, form){
        if(!form.$valid){
            return;
        }

        userData.save(user);
        authService.setCurrentUser(user);
        $location.url('/absence');
    }
});
