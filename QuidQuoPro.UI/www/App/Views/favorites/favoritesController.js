angular.module('app.controllers')
    .controller('FavoritesController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-favorites-title');
        }
        onCreate();
    });