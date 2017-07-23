angular.module('app.controllers')
    .controller('ThingController', function ($scope, ThingOrService, CategoriesService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.thing = ThingOrService.getTitle();

        $scope.items = CategoriesService.getCategories(1);

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });