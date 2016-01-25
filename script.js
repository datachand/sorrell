(function () {

    angular.module('thinhelp', ['ngResource', 'ngSanitize', 'ngAnimate', 'ui.bootstrap']);

    angular.module('thinhelp').run(function () {
        console.log('Thin Help');
    });

    angular.module('thinhelp').controller('widgetController', ['$scope', '$log', '$uibModal', function ($scope, $log, $uibModal) {
        $scope.dataSet = [
            {"name": "Chart"},
            {"name": "Grid"}
        ];
    }]);

    angular.module('thinhelp').directive('thinHelp', [function () {
        return {
            restrict: 'E',
            templateUrl: 'thinhelp.html',
            scope: {
                context: '@',
                openhelp: '&'
            },
            controller: function ($scope, $location, $timeout, $anchorScroll) {

                $scope.content = null;
                $scope.openhelp = function (context) {
                    console.log("OpenHelp");
                    angular.element(document.querySelectorAll('.coupon')).removeClass('spotlight coupon-active');
                    angular.element(document.querySelectorAll('.coupon')).addClass('coupon-nonactive');
                    angular.element(document.querySelector('.overlay')).css("display", "block");
                    angular.element(document.querySelectorAll('.coupon-' + context)).addClass('spotlight coupon-active');
                    angular.element(document.querySelector('.helpbox')).addClass('helpbox-active');

                    if (context === "Chart") {
                         angular.element(document.querySelector('.helpbox')).css({
                             "left": "50%",
                             "top": "10%"
                         });

                        angular.element(document.querySelector('.helpbox-content')).html("A chart, also called a graph, is a graphical representation of data, in which the data is represented by symbols, such as bars in a bar chart, lines in a line chart, or slices in a pie chart. A chart can represent tabular numeric data, functions or some kinds of qualitative structure and provides different info.");
                    } else  {

                         angular.element(document.querySelector('.helpbox')).css({
                             "left": "20%",
                             "top": "10%"
                         });

                        angular.element(document.querySelector('.helpbox-content')).html("A grid view or a datagrid is a graphical control element that presents a tabular view of data. A typical grid view also supports some or all of the following: Clicking a column header to change the sort order of the grid. Dragging column headers to change their size and their order.");
                    }
                }

            },
            link: function (scope, iElement, iAttrs) {

            }
        };
    }]);

    angular.module('thinhelp').directive('helpbox', [function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'helpbox.html',
            controller: function ($scope) {
                $scope.close = function () {
                    angular.element(document.querySelectorAll('.coupon')).removeClass('spotlight coupon-active');
                    angular.element(document.querySelectorAll('.coupon')).addClass('coupon-active');
                    angular.element(document.querySelector('.overlay')).css("display", "none");
                    angular.element(document.querySelector('.helpbox')).removeClass('helpbox-active');
                }
            },
            link: function (scope, iElement, iAttrs) {
                
            }
        };
    }]);


})();