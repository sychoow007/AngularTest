'use strict';

angularApp.factory('userResource',['$resource',function($resource){
    var baseUrl = config.apiurl;
    var buildUrl = function(resourceUrl){
        return baseUrl + resourceUrl;
    };

    return $resource(buildUrl('api/user/:username'),
        {username:'@username'},
        {update: {method: 'PUT'}});

    //returns all records
    return service;
}]);
