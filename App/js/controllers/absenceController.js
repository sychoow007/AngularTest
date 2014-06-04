'use strict';

angularApp.controller('AbsenceController',
    function AbsenceController($scope, $location, authService, absenceData){
        //if (!authService.isAuthenticated()) {
        //    $location.url('/login');
        //    return;
        //}

        var user = authService.getCurrentUser();


        $scope.absencesForUser = absenceData.getAllAbsencesForUser("jurgen");//authService.getCurrentUserName());

        //$scope.absences = absenceData.getAllAbsences();
        $scope.gridOptions = {
            data: 'absencesForUser',
            showSelectionCheckBox: true,
            afterSelectionChange: function(rowItem, event){
                console.log(rowItem);
                //$location.url('/newAbsence?absenceId=' + rowItem.id);
            }
        };
    }
);
