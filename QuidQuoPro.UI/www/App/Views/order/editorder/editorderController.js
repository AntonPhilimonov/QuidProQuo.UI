angular.module('app.controllers')
    .controller('EditOrderController', function ($scope, $location, $window, localStorage, orderService) {
        function onCreate(parameters) {
            $scope.order = localStorage.get();
        }
        onCreate();
        
        $scope.saveOrder = function () {

            var order = {
                orderFields: []
            };
            order.orderFields[0] = new Date().toUTCString();
            order.orderFields[1] = $scope.order.ObjectBase.Title;
            order.orderFields[2] = $scope.order.ObjectBase.Description;
            order.orderFields[3] = $scope.order.ObjectBase.CategoryItem.Id;
            order.orderFields[4] = $scope.order.ObjectBase.Location;


            if (orderService.editOrder(order, $scope.order.Id)) {
                $location.path('/tab/list_activ');
                $window.location.reload();
            } else {
                console.log('error');
            }
        }
    });