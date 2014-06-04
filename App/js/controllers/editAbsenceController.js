'use strict';

angularApp.controller('EditAbsenceController',
    function EditAbsenceController($scope, $location, absenceData, authService){
        $scope.today = function() {
            $scope.startDate = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.startDate = null;
            $scope.endDate = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.openStart = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedStart = true;
        };

        $scope.openEnd = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedEnd = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.initDate = new Date('2016-15-20');
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd-MM-yyyy', 'shortDate'];
        $scope.format = $scope.formats[2];

        $scope.absence = {};

        $scope.saveAbsence = function(absence, form){
            if(!form.$valid)
                return;

            var user = authService.getCurrentUserName();

            absence.employeeName = "jurgen";
            console.log(absence);
            if(absence.id != 0 || absence.id != null){
                absenceData.update(absence);
            }else {
                absenceData.save(absence, function () {
                    $location.url("/absences");
                });
            }
        }
    }
);
