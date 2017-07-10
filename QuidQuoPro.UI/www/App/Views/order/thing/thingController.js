angular.module('app.controllers')
    .controller('ThingController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.thing = ThingOrService.getTitle();

        $scope.items = [];

        if ($scope.thing === 'Вещи:') {
            $.get('http://localhost/api/categories/', function(data) {

                for (var i = 0; i < data.length; i++) {
                    if (data[i].IsCategory === true && data[i].CategoryType === 1) {
                        $scope.items.push(data[i]);
                    } 
                }
            },
           'json');
        }

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });