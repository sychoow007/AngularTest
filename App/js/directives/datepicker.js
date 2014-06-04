'use strict';

angularApp.directive('datepicker',function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr){
            angular.element(element).datepicker();
        }
    }
})
