angular.module('app.controllers')
    .controller('AccountController', function ($scope) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-account-title');
        }

        onCreate(); 
    });
