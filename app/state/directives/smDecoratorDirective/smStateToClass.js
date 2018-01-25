/*
 * This decorator directive inject specific css class that has the same name as the status
 * 
 **/
(function () {
    "use strict";

    angular.module('app.state').directive('smStateToClass', function () {
        return {
            link: function (scope, element, attrs) {
                var para = attrs['smStateToClass'];

                switch (para) {
                    case 'Accepted':
                        element.addClass('accepted');
                        break;
                    case 'Complete':
                        element.addClass('complete');
                        break;
                    case 'Rejected':
                        element.addClass('rejected');
                        break;
                    case 'Running':
                        element.addClass('running');
                        break;
                    case 'Pending':
                        element.addClass('pending');
                        break;
                    default:
                        element.addClass('');
                        break;
                }

            }
        };
    });
})();