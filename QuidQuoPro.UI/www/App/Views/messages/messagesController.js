angular.module('app.controllers')
    .controller('MessagesController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-messages-title');
        }
        onCreate();
    });