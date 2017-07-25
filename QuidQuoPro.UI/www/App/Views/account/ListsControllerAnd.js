angular.module('app.controllers')
    .controller('ListsControllerAnd', function ($scope) {
        function onCreate(parameters) {
            $scope.title = 'newAdd';
        }
        onCreate();
    });