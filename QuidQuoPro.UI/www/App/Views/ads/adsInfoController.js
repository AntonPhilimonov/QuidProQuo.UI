angular.module('app.controllers')
    .controller('AdsInfoController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.order = ThingOrService.getTitle();
        }
        onCreate();
    });