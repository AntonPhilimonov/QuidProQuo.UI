angular.module('app.controllers')
    .controller('EditOrderController', function ($scope, $location, ThingOrService, orderService) {
        function onCreate(parameters) {
            $scope.order = ThingOrService.getTitle();
        }
        onCreate();
        
        $scope.saveOrder = function () {
            if (orderService.editOrder(order)) {
                $location.path('/tab/list_activ');
            } else {
                console.log('error');
            }
        }
    });