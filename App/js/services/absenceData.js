'use strict';

angularApp.factory('absenceData',function(absenceResource, authService){
    return{
        getAbsence: function(absenceId){
            return absenceResource.query({id: absenceId});
        },
        getAllAbsences: function(){
            return absenceResource.query();
        },
        getAllAbsencesForUser: function(user){
            return absenceResource.query({'employee': user});
        },
        update: function(absence){
            absenceResource.$update(absence);
        },
        save: function(absence){
            absenceResource.save(absence);
        },
        remove: function(absence){
            absenceResource.delete(absence);
        }
    };
});
