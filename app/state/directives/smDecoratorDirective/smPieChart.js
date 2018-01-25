/*
 * This decorator directive is for for generating the pie chart seen all over the application
 **/
(function () {
    "use strict";

    angular.module('app.state').directive('smPieChart', function () {
        return {
            restrict: 'A',
            scope: {
                para: '=smPieChart'
            },
            link: function (scope, element) {
                //width
                var w = 100;
                //height
                var h = 100;
                //radius
                var r = h / 2;

                //this function set value zero for value if value 
                //is not supplied
                function checknull(val) {
                    if (!val) {
                        return 0;
                    } else {
                        return val;
                    }
                }

                var data = [
                   {
                       "label": checknull(scope.para.goodUnits),
                       "value": checknull(scope.para.passed)
                   }, {
                       "label": checknull(scope.para.badUnits),
                       "value": (100 - checknull(scope.para.passed))
                   }
                ];

                var vis = d3.select(element[0]).append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
                var pie = d3.layout.pie().value(function (d) { return d.value; });

                // declare an arc generator function
                var arc = d3.svg.arc().outerRadius(r);

                // select paths, use arc generator to draw
                var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
                arcs.append("svg:path")
                    .attr("fill", function (d, i) {
                        if (i === 0) {
                            //success color
                            return "#6EA94F";
                        } else {
                            //failure color
                            return "#C66728";
                        }
                    })

                    .attr("d", function (d) {
                        return arc(d);
                    });

                // add the text
                arcs.append("svg:text").attr("transform", function (d) {
                    d.innerRadius = 0;
                    d.outerRadius = r;
                    return "translate(" + arc.centroid(d) + ")";
                })  //text color for our labels
                    .attr("fill", "black")
                    .attr("text-anchor", "middle").text(function (d, i) {
                        return data[i].label;
                    }
                );
            }
        };
    });
})();