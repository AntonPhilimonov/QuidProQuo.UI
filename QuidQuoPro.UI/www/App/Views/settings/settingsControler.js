angular.module('app.controllers')
    .controller('SettingsController',
        function ($scope, $location) {
        function onCreate(parameters) {
            $scope.title = i18n.t('settings.title');
        }
        onCreate();
        });