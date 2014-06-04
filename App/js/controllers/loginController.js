'use strict';

angularApp.controller('LoginController',function LoginController($scope, $location, userData,authService){
    $scope.user = {username: "", password: ""};
    $scope.login = function(){
        userData.getUser($scope.user.username);
        //userData.getUser(user);
        //.$promise.then(function(){
        //    authService.setCurrentUser(user.username);
        //    $location.url('/absences');
        //});
    }
});
