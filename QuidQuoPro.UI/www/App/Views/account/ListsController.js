angular.module('app.controllers')
    .controller('ListsController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = 'Chtoto';
        }
        onCreate();
    });