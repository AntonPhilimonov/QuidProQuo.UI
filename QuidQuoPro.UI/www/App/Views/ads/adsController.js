angular.module('app.controllers')
    .controller('AdsController', function ($scope, $location, orderService, localStorage) {
    function onCreate(parameters) {
        var promiseObj = orderService.getOrders();
        promiseObj.then(function (value) {
            $scope.orders = value;
        });
    }
    onCreate();

    var title;

    $scope.titleAds = {
        title: function (newTitle) {
            return arguments.length ? (title = newTitle) : title;
        }
    };

    $scope.findOrders = function () {
        $scope.orders = null;
        var promiseObj = orderService.findOrders(title);
        promiseObj.then(function (value) {
            $scope.orders = value;
        });
    }

    $scope.adsInfo = function (order) {
        localStorage.set(order);
        $location.path('/tab/adsinfo');
    }
    });

