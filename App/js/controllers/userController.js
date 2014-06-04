'use strict';

angularApp.controller('UserController',
    function UserController($scope,$location,authService,userData){


        $scope.users = userData.users();
        $scope.gridOptions = { data: 'users'};
    }
);
