angular.module('app.controllers')
    .controller('ServiceController', function ($scope, localStorage, CategoriesService) {
        function onCreate(parameters) {
            var promiseObj = CategoriesService.getCategories('service');
            promiseObj.then(function (value) {
                 $scope.items = value;
            });
        }
        onCreate();

        $scope.addOrder = function (item) {
            localStorage.set(item);
        }

       
    });
        