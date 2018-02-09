angular.module('app.controllers')
    .controller('ListActivController', function ($scope, $location, localStorage, orderService) {
        function onCreate(parameters) {
            var promiseObj = orderService.usersActivOrders(1);
            promiseObj.then(function (value) {
                $scope.orders = value;
            });
        }
        onCreate();
        
        $scope.revOrder = function(order) {
            localStorage.set(order);
            $location.path('/tab/revorder');
        }
    });