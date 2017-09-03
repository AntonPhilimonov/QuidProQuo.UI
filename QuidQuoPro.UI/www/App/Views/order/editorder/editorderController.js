angular.module('app.controllers')
    .controller('EditOrderController', function ($scope, $location, localStorage, orderService) {
        function onCreate(parameters) {
            $scope.order = localStorage.get();
        }
        onCreate();
        
        $scope.saveOrder = function (order) {
            if (orderService.editOrder(order)) {
                $location.path('/tab/list_activ');
            } else {
                console.log('error');
            }
        }
    });