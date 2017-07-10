angular.module('app.controllers')
    .controller('SubcategoryController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        var category = ThingOrService.getTitle();
        $scope.category = category.Title;
        $scope.items = [];

        if (category.Subcategories == null) {
            $scope.items.push(category);
        } else {
            $scope.items = category.Subcategories;
        }

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });