'use strict';

angularApp.factory('absenceResource',['$resource',function($resource){
    var baseUrl = config.apiurl;
    var buildUrl = function(resourceUrl){
        return baseUrl + resourceUrl;
    };

    return $resource(buildUrl('api/absences/:employee'),
            {employee: '@employee'},
            {
                "update": {method: "PUT"}
            });
}]);
