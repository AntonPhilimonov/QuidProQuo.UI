angular.module('app.controllers')
    .controller('AddOrderController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.category = ThingOrService.getTitle().Title;
    });