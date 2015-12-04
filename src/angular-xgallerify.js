var jjtXGallerify = angular.module('jtt_angular_xgallerify', []);

jjtXGallerify.directive('xgallerify', function () {
    return {
        restrict: 'AEC',
        replace: 'false',
        link: function (scope, element, attrs) {

            var margin = 5;
            var mode = 'default';
            var lastRow = 'adjust';

            element.gallerify({
                margin:margin,
                mode:mode,
                // mode:'bootstrap',
                // mode:'flickr',
                // lastRow:'fullwidth',
                lastRow:lastRow,
            });

            scope.$on('angular-xGallerify.refresh', function() {
                element.gallerify().render();
            });
        }
    }
});
