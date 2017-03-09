angular.module('app.controllers')
    .controller('AdsController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-ads-title');
        }
        onCreate();
    });