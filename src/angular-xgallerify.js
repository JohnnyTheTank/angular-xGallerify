var jjtXGallerify = angular.module('jtt_angular_xgallerify', []);

jjtXGallerify.directive('xgallerify', function () {
    return {
        restrict: 'A',
        replace: 'false',
        link: function (scope, element, attrs) {

            var settings = {};
            var params = {};

            if(attrs.xgallerify) {
                params = $.parseJSON(attrs.xgallerify.replace(/'/g, '"'));
            }

            if (isObject(params)) {
                settings = $.extend({
                    margin:5,
                    mode:'normal',
                    lastRow:'adjust'
                }, params );
            }

            element.gallerify(settings);

            scope.$on('angular-xGallerify.refresh', function() {
                element.gallerify(settings);
            });

            function isObject(item) {
                return (typeof item === "object" && !Array.isArray(item) && item !== null);
            }
        }
    }
});
