angular.module('app.controllers')
    .controller('ListsControllerEnd', function ($scope) {
        function onCreate(parameters) {
            $scope.title = 'newAdd';
        }
        onCreate();
    });