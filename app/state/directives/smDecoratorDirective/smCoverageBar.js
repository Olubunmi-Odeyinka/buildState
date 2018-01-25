/*
 * This decorator directive is for generating the progress bar everywhere is needed
 * 
 **/
(function () {
    "use strict";

    angular.module('app.state').directive('smCoverageBar', function () {
        return {
            restrict: 'A',
            scope: {
                para: '=smCoverageBar'
            },
            link: function (scope, element) {

                var para = scope.para;

                //get actual coverage  conveerted to the value in the ratio of full progress bar
                var actualwidth = 0
                if (para.value) {
                    actualwidth = (para.maxwidth * para.value) / 100;
                } else {
                    actualwidth = 0;
                }

                //We have 4 colors 1.Background color, 2. Success color, 3. Failure color  and 4. Running color
                //only the first background and success color is compulsory

                //This section draw the back ground
                var chart = d3.select(element[0]).append("svg")
                var rects = chart
                             .append("rect")
                             .attr("x", 0)
                             .attr("y", 0)
                             .attr("height", para.height)
                             .attr("width", para.maxwidth)

                             .attr("fill", para.color.background);
                var rects1;
                //check if stroke parameter is passed and use it
                if (para.borderwidth && para.bordercolor) {
                    rects1 = rects.style("stroke", para.bordercolor)
                           .style("stroke-width", para.borderwidth);
                } else {
                    rects1 = rects;
                }

                //This section draw the progresss on the background        
                var rects2 = chart
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("height", para.height)


                var rects3;
                // if value passed is less than zero use the failure colour if is suppled in the parameter
                if (para.value < 0 && para.color.failure) {
                    rects3 = rects2.attr("width", para.maxwidth)
                             .attr("fill", para.color.failure);
                } else {
                    rects3 = rects2;
                }

                var rects4;
                var rects5;
                //if value is greater than zero paint the equivalent portion with success colour
                if (para.value > 0) {
                    rects4 = rects3.attr("width", actualwidth)
                            .attr("fill", para.color.success);

                    //if status is running paint the par with runing colour equvalent of the value supply
                    if (para.status && para.status === "Running") {
                        rects5 = rects4.attr("width", actualwidth)
                                 .attr("fill", para.color.running);
                    } else {
                        rects5 = rects4;
                    }
                } else {
                    rects5 = rects4 = rects3;
                }

            }
        };
    });
})();