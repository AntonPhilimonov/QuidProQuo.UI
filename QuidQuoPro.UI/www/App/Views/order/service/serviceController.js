angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.service = ThingOrService.getTitle();
        
        $scope.items = [];

        if ($scope.service === 'Услуги:') {
            $.get('http://localhost/api/categories/', function(data) {

                for (var i = 0; i < data.length; i++) {
                    if (data[i].IsCategory === true && data[i].CategoryType === 2) {
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
        