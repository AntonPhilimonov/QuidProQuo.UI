angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService, categoriesService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.service = ThingOrService.getTitle();
        
        $scope.items = categoriesService.getCategories(2);

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });
        