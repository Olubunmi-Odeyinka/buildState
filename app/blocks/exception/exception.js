(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function(e) {
                var thrownDescription;
                var newMessage;
                if (e.error) {
                    if (e.error.error) {
                        thrownDescription = '\n Reason: ' + e.error.error;
                    } else {
                        thrownDescription = '\n Reason: ' + e.error;
                    } 
                }
                
                if (e.data && e.data.error) {
                    thrownDescription = '\n Reason: ' + e.data.error; 
                }
                newMessage = message + thrownDescription;
                //e.data.description = newMessage;
                logger.error(newMessage);
                return $q.reject(e);
            };
        }
    }
})();
