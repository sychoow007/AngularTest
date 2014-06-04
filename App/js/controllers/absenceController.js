'use strict';

angularApp.controller('AbsenceController',
    function AbsenceController($scope, $location, authService, absenceData){
        //if (!authService.isAuthenticated()) {
        //    $location.url('/login');
        //    return;
        //}

        var user = authService.getCurrentUser();
        var add= "Voeg toe";
        var update = "Sla op";

        $scope.saveAbsenceText = add;
        //$scope.absencesForUser = absenceData.getAllAbsencesForUser("jurgen");//authService.getCurrentUserName());

        $scope.absence = {};
        $scope.mySelections = [];

        $scope.absences = absenceData.getAllAbsences();
        $scope.gridOptions = {
            data: 'absences',
            showSelectionCheckbox: true,
            afterSelectionChange: function(){
                $scope.selectionChanged();
            },
            selectedItems: $scope.mySelections
        };

        $scope.selectionChanged = function(){
            var selections = $scope.mySelections;

            if(selections.length > 1){
                $scope.alert = 'selected more then one, please select one.';
            }else {
                $scope.absence = $scope.mySelections[0];
                $scope.saveAbsenceText = update;
            }
        };

        $scope.saveAbsence = function(absence){
            if(absence.ID == null || absence.ID == 0)
                absenceData.save(absence);
            else
                absenceData.update(absence);

            $scope.saveAbsenceText = add;
        };

        $scope.deleteAbsences = function(){
            var selections = $scope.mySelections;

            angular.forEach(selections, function(value, key){
                absenceData.remove(value);
            })
        }
    }
);
