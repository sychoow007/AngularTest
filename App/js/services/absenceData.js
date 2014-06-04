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
        }
    };

    function getNextAbsenceId(absences){
        var max = 0;

        for (var id = 0; id < absences.length; id++)
        {
            if(absences[id].id > max)
                max = absences[id].id;
        }

        return max + 1;
    }
});
