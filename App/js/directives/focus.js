'use strict';

angularApp.directive('focus',function(){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            angular.element(element).focus();
        }
    }
});
