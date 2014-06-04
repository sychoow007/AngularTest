'use strict';

angularApp.directive('editAbsence',function(){
    return{
        restrict: "E",
        templateUrl: "app/partials/directives/editAbsence.html",
        scope:{
            absence:"=",
            saveAbsenceText: "@",
            saveAbsence: "&"
        }
    }
})
