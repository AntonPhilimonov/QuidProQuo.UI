angular.module('app.controllers')
    .controller('AdsInfoController', function ($scope, localStorage) {
        function onCreate(parameters) {
            $scope.order = localStorage.get();
        }
        onCreate();
    });