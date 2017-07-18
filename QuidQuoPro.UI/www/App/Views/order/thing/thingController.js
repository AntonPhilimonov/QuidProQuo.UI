angular.module('app.controllers')
    .controller('ThingController', function ($scope, thingOrService, categoriesService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.thing = thingOrService.getTitle();

        $scope.items = categoriesService.getCategories(1);

        $scope.addOrder = function (item) {
            thingOrService.setTitle(item);
        }
    });