'use strict';

angularApp.controller('MainMenuController',
    function MainMenuController($scope, authService){
        $scope.user = {};

        $scope.$watch(authService.getCurrentUserName, function(){
            $scope.user = authService.getCurrentUser();
        });

        $scope.isAuthenticated = function(){
            return authService.isAuthenticated();
        };

        $scope.logOut = function(){
            authService.setCurrentUser({});
        };
    }
);
