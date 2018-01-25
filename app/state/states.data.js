/*
 * This contains the data that is displayed on the state page
 **/
(function () {   
    angular
    .module('app.state')
    .factory('stateDataService', stateDataService);

    stateDataService.$inject = [];

    function stateDataService() {

        var service = {
            loadStates: loadStates
        };
        return service;

        function loadStates() {
            return [
                {
                    build: 'Tenrox-R1_1235',
                    state: 'Pending',
                    type: 'Build',
                    timeStarted: '',
                    detail: {
                        result: '',
                        action: '',
                        deployed: '',
                        issuelist: [],
                        mergedbuildlist: [],
                        metrics: {
                            test: 0,
                            maintainability: 0,
                            security: 0,
                            workmanship: 0,
                            summaryvalue: 0
                        },
                        build: {
                            debuged: false,
                            released: false,
                            buildTime: 0,
                            summaryvalue : 0
                        },
                        unitTest: {
                            run: false,
                            coverage: 0,
                            passed: 0,
                            goodUnits: 0,
                            badUnits: 0,
                            summaryvalue: 0
                        },
                        functionalTest: {
                            run: false,
                            coverage: 0,
                            passed: 0,
                            goodUnits: 0,
                            badUnits: 0,
                            summaryvalue: 0
                        }
                    }

                },
                {
                    changelist: 432462,
                    owner: 'jtuck',
                    state: 'Running',
                    type: 'Firewall',
                    timeStarted: '4/18/2014 12:12pm',
                    detail: {
                        result: '',
                        action: '',
                        deployed: '',
                        issuelist: [],
                        mergedbuildlist: [],
                        metrics: {
                            test: 0,
                            maintainability: 0,
                            security: 0,
                            workmanship: 0,
                            summaryvalue: 70
                        },
                        build: {
                            debuged: false,
                            released: false,
                            buildTime: 0,
                            summaryvalue: 0
                        },
                        unitTest: {
                            run: false,
                            coverage: 0,
                            passed: 0,
                            goodUnits: 0,
                            badUnits: 0,
                            summaryvalue: 0
                        },
                        functionalTest: {
                            run: false,
                            coverage: 0,
                            passed: 0,
                            goodUnits: 0,
                            badUnits: 0,
                            summaryvalue: 0
                        }
                    }
                },
                {
                    changelist: 432461,
                    owner: 'samy',
                    state: 'Rejected',
                    type: 'Firewall',
                    timeStarted: '4/18/2014 10:53am',
                    detail: {
                        result: 'Change Rejected',
                        action: 'Metrics Reduction',
                        deployed: 'Find Issues',
                        issuelist: ['cyclomatic complexity', 'Inconsistent Pattern'],
                        mergedbuildlist: [],
                        metrics: {
                            test: 64,
                            maintainability: -53,
                            security: 64,
                            workmanship: 72,
                            summaryvalue: -53
                        },
                        build: {
                            debuged: true,
                            released: true,
                            buildTime: '4/17/2014 10:45am',
                            summaryvalue: 100
                        },
                        unitTest: {
                            run: true,
                            coverage: 76,
                            passed: 73,
                            goodUnits: 142,
                            badUnits: 10,
                            summaryvalue: 100
                        },
                        functionalTest: {
                            run: true,
                            coverage: 23,
                            passed: 68,
                            goodUnits: 4321,
                            badUnits: 2145,
                            summaryvalue: 100
                        }
                    }
                },
                {
                    build: 'Tenrox-R1_1234',
                    state: 'Complete',
                    type: 'Build',
                    timeStarted: '4/18/2014 12:12pm',
                    detail: {
                        result: 'Complete',
                        action: 'TobeDeploy',
                        deployed: 'Deploy',
                        issuelist: [],
                        mergedbuildlist: ['Production', 'Testing'],
                        metrics: {
                            test: 64,
                            maintainability: 53,
                            security: 64,
                            workmanship: 72,
                            summaryvalue: 100
                        },
                        build: {
                            debuged: true,
                            released: true,
                            buildTime: '4/18/2014 12:12',
                            summaryvalue: 100
                        },
                        unitTest: {
                            run: true,
                            coverage: 76,
                            passed: 73,
                            goodUnits: 142,
                            badUnits: 10,
                            summaryvalue: 100
                        },
                        functionalTest: {
                            run: true,
                            coverage: 23,
                            passed: 68,
                            goodUnits: 4321,
                            badUnits: 2145,
                            summaryvalue: 100
                        }
                    }
                },
                 {
                     changelist: 432460,
                     owner: 'samy',
                     state: 'Rejected',
                     type: 'Firewall',
                     timeStarted: '4/17/2014 7:51am',
                     detail: {
                         result: 'Change Rejected',
                         action: 'Metrics Reduction',
                         deployed: 'Correct Errors',
                         issuelist: ['spaghetti Code', 'Inconsistent Pattern'],
                         mergedbuildlist: [],
                         metrics: {
                             test: -64,
                             maintainability: -53,
                             security: -64,
                             workmanship: 72,
                             summaryvalue: -53
                         },
                         build: {
                             debuged: false,
                             released: false,
                             buildTime: 0,
                             summaryvalue: 0,
                             summaryvalue: 0
                         },
                         unitTest: {
                             run: false,
                             coverage: 0,
                             passed: 0,
                             goodUnits: 0,
                             badUnits: 0,
                             summaryvalue: 0
                         },
                         functionalTest: {
                             run: false,
                             coverage: 0,
                             passed: 0,
                             goodUnits: 0,
                             badUnits: 0,
                             summaryvalue: 0
                         }
                     }
                 },
                {
                    changelist: 432459,
                    owner: 'samy',
                    state: 'Accepted',
                    type: 'Firewall',
                    timeStarted: '4/16/2014 12:12',
                    detail: {
                        result: 'Change Accepted',
                        action: 'Auto-Merged',
                        deployed: 'Merged Build',
                        issuelist: [],
                        mergedbuildlist: ['Know Your Customer Module Invalid Date Fixed', 'Wrong Tax computation Fixed'],
                        metrics: {
                            test: 64,
                            maintainability: 53,
                            security: 64,
                            workmanship: 72,
                            summaryvalue: 100
                        },
                        build: {
                            debuged: true,
                            released: true,
                            buildTime: '4/17/2014 10:45am',
                            summaryvalue: 100
                        },
                        unitTest: {
                            run: true,
                            coverage: 76,
                            passed: 73,
                            goodUnits: 142,
                            badUnits: 10,
                            summaryvalue: 100
                        },
                        functionalTest: {
                            run: true,
                            coverage: 23,
                            passed: 68,
                            goodUnits: 4321,
                            badUnits: 2145,
                            summaryvalue: 100
                        }
                    }
                }

            ];
        };
    }


})();