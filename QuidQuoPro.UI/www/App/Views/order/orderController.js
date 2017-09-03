angular.module('app.controllers')
    .controller('OrderController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();
    });