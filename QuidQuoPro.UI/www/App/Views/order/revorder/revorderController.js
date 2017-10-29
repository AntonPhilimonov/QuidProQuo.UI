angular.module('app.controllers')
    .controller('RevOrderController', function ($scope, $location, localStorage, orderService) {
        function onCreate(parameters) {
            $scope.order = localStorage.get();
        }
        onCreate();

        $scope.editOrder = function (order) {
            localStorage.set(order);
            $location.path('/tab/editorder');
        }
        $scope.deleteOrder = function (id) {
            if (orderService.deleteOrder(id)) {
                $location.path('/tab/list_activ');
            } else {
                console.log('error');
            }
        }
    });