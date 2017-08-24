angular.module('app.controllers')
    .controller('ThingController', function ($scope, ThingOrService, CategoriesService) {
        function onCreate(parameters) {
            //$scope.title = i18n.t('tabs.tab-order-title');
            $scope.thing = ThingOrService.getTitle();
            var promiseObj = CategoriesService.getCategories('thing');
            promiseObj.then(function (value) {
                $scope.items = value;
            });
        }
        onCreate();

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });