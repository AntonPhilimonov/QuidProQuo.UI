angular.module('app.controllers')
    .controller('AddOrderController', function ($scope, $location, localStorage, orderService) {
        function onCreate(parameters) {
            $scope.category = localStorage.get();
        }
        onCreate();
        var title;
        var description;
        var location;
        $scope.titleOrder = {
            title: function (newTitle) {
                return arguments.length ? (title = newTitle) : title;
            }
        };
        $scope.descriptionOrder = {
            description: function (newDescription) {
                return arguments.length ? (description = newDescription) : description;
            }
        };
        $scope.locationOrder = {
            location: function (newLocation) {
                return arguments.length ? (location = newLocation) : location;
            }
        };

        $scope.addOrder = function () {
            var order = {
            orderFields: []
            };
            order.orderFields[0] = new Date().toUTCString();
            order.orderFields[1] = title;
            order.orderFields[2] = description;
            order.orderFields[3] = $scope.category.ID;
            order.orderFields[4] = location;

            if (orderService.addNewOrder(order)) {
                $location.path('/tab/list_activ');
            }
        }
    });