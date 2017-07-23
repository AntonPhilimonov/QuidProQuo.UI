angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService, CategoriesService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.service = ThingOrService.getTitle();
        
        $scope.items = CategoriesService.getCategories(2);

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });
        