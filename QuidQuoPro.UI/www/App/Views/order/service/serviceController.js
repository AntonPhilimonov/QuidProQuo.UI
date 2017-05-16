angular.module('app.controllers')
    .controller('ServiceController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

        $scope.service = ThingOrService.getTitle();
        $scope.items = [
            { id: 'Ремонт' },
            { id: 'Уборка' },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 }
        ];

        $scope.addOrder = function (item) {
            ThingOrService.setTitle(item);
        }
    });