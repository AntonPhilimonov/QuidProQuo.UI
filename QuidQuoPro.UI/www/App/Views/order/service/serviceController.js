angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService, CategoriesService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
            $scope.service = ThingOrService.getTitle();
            $scope.items = CategoriesService.getCategories(2);
            $scope.$apply();
        }
        onCreate();

        $scope.addOrder = function(item) {
                ThingOrService.setTitle(item);
        };
    });
        