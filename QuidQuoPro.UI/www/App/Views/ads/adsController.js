angular.module('app.controllers')
    .controller('AdsController', function ($scope, AdsService) {
    function onCreate(parameters) {

        $scope.title = i18n.t('tabs.tab-ads-title');

        var promiseObj = AdsService.getOrders();
        promiseObj.then(function (value) {
            $scope.orders = value;
        });

        }
        onCreate();
    });

