/*
 * This decorator directive inject specific css class into the line items i.e. each state
 * based on the status of the state item
 **/
(function () {
    "use strict";

    angular.module('app.state').directive('smStatus', function () {
        return {
            link: function (scope, element, attrs) {
                var para = attrs['smStatus'];

                switch (para) {
                    case 'Accepted':
                    case 'Complete':
                        element.addClass('success');
                        break;
                    case 'Rejected':
                        element.addClass('failed');
                        break;
                    case 'Running':
                        element.addClass('running');
                        break;
                    case 'Pending':
                        element.addClass('pending');
                        break;
                    default:
                        element.addClass('pending');
                        break;
                }

            }
        };
    });
})();