angular.module('app.controllers')
    .controller('OrderController', function ($scope, ThingOrService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-order-title');
        }
        onCreate();

       $scope.setThing = function() {
            ThingOrService.setTitle('Вещи:');
        }
       $scope.setService = function() {
            ThingOrService.setTitle('Услуги:');
        }
    });