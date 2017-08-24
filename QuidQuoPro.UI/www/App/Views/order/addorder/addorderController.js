angular.module('app.controllers')
    .controller('AddOrderController', function ($scope, $location, ThingOrService, addOrderService) {
        function onCreate(parameters) {
            //$scope.title = i18n.t('tabs.tab-order-title');
            $scope.category = ThingOrService.getTitle();
        }
        onCreate();
        var title;
        var description;
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

        $scope.addOrder = function () {
            var order = {
            orderFields: []
            };
            order.orderFields[0] = new Date().toUTCString();
            order.orderFields[1] = title;
            order.orderFields[2] = description;
            order.orderFields[3] = $scope.category.ID;

            if (addOrderService.addNewOrder(order)) {
                $location.path('/tab/list_activ');
            }
        }
    });