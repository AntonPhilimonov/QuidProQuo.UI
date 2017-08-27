angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService, CategoriesService) {
        function onCreate(parameters) {
            //$scope.title = i18n.t('tabs.tab-order-title');
            $scope.service = ThingOrService.getTitle();
            var promiseObj = CategoriesService.getCategories('service');
            promiseObj.then(function (value) {
                 $scope.items = value;
            });
        }
        onCreate();

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }

       
    });
        