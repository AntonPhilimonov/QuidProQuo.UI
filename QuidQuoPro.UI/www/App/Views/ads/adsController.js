angular.module('app.controllers')
    .controller('AdsController', function ($scope, $location, AdsService, ThingOrService) {
    function onCreate(parameters) {

        $scope.title = i18n.t('tabs.tab-ads-title');

        var promiseObj = AdsService.getOrders();
        promiseObj.then(function (value) {
            $scope.orders = value;
        });

        }
    onCreate();

    $scope.adsInfo = function (order) {
        ThingOrService.setTitle(order);
        $location.path('/tab/adsinfo');
    }
    });

