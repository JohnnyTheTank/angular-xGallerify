var jjtXGallerify = angular.module('jtt_angular_xgallerify', []);

jjtXGallerify.directive('xgallerify', function () {
    return {
        restrict: 'AEC',
        replace: 'false',
        link: function (scope, element, attrs) {

            element.gallerify({
                margin:5,
                mode:'default',
                // mode:'bootstrap',
                // mode:'flickr',
                // lastRow:'fullwidth',
                lastRow:'adjust',
            });
        }
    }
});
