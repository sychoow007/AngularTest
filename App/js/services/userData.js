'use strict';

angularApp.factory('userData',function(userResource, authService){
    return {
        getUser:function(user) {
            return userResource.query({username:user});
        },
        save:function(user) {
            userResource.save(user);
        },
        update: function(user){
            userResource.$update();
        },
        users:function () {
            return userResource.query();
        }
    };
});
