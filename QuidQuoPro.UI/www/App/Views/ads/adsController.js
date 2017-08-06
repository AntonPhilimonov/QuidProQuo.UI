angular.module('app.controllers')
    .controller('adsController', function ($scope, SearchService) {
        function onCreate(parameters) {
            $scope.title = i18n.t('tabs.tab-ads-title');
        }
        onCreate();

        $scope.search = function() {
            $scope.items = SearchService.search($scope.searchItem);
        }

    });