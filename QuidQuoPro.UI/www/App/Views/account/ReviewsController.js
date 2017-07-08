angular.module('app.controllers')
    .controller('ReviewsController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = 'Reviews';
        }
        onCreate();
    });