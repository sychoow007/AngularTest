'use strict';

angularApp.controller('AbsenceController',
    function AbsenceController($scope, $location, authService, absenceData){
        //if (!authService.isAuthenticated()) {
        //    $location.url('/login');
        //    return;
        //}

        var user = authService.getCurrentUser();

        $scope.saveAbsenceText = "Voeg toe";
        //$scope.absencesForUser = absenceData.getAllAbsencesForUser("jurgen");//authService.getCurrentUserName());

        $scope.absence = {};
        $scope.mySelections = [];

        $scope.absences = absenceData.getAllAbsences();
        $scope.gridOptions = {
            data: 'absences',
            showSelectionCheckBox: true,
            afterSelectionChange: function(){
                $scope.selectionChanged();
            },
            selectedItems: $scope.mySelections,
            multiSelect: false
        };

        $scope.selectionChanged = function(){
            $scope.absence = $scope.mySelections[0];
            $scope.saveAbsenceText = "Sla op";
        }

        $scope.saveAbsence = function(absence){
            if(absence.ID == null || absence.ID == 0)
                absenceData.save(absence);
            else
                absenceData.update(absence);
        }
    }
);
