angular.module('app.controllers')
    .controller('ThingController', function ($scope, localStorage, CategoriesService) {
        function onCreate(parameters) {
            var promiseObj = CategoriesService.getCategories('thing');
            promiseObj.then(function (value) {
                $scope.items = value;
            });
        }
        onCreate();

        $scope.addOrder = function (item) {
            localStorage.set(item);
        }
    });