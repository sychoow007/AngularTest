'use strict';

angularApp.directive('enterTarget',function()
{
    return {
        restrict: "A",
        link: function(scope, element, attrs)
        {
            //split all ids in the entertarget attribute
            var elementSelectors = "#" + attrs.enterTarget.split(",").join(',#');
            //get all elements that are visible
            var targetElements = angular.element(elementSelectors).filter(":visible");
            //simulate click if enter is pressed
            if(event.keyCode === 13)
                targetElements.click();
        }
    }
});
