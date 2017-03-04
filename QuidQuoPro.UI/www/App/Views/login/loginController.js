angular.module('app.controllers')
    .controller('LoginController',
    [
        '$scope',
        '$location',
        'VkApiService',
        'UserApiService',
        function($scope, $location, vkApiService, userApiService) {
            /// <summary>Controller to Login view.</summary>

            var IS_DEV_VERSION = true;

            $scope.login = function (username, password) {
                /// <summary>Login method.</summary>
                // TODO Anton - нужно подумать, как передавать из настроек флаг, что это DEV версия, и можно логиниться без учетных данных.
                if (IS_DEV_VERSION) {
                    $location.path('/tab/account');
                    $scope.$apply();
                } else {
                    userApiService.login(username, password)
                        .then(function() {
                            $location.path('/tab/account');
                            $scope.$apply();
                        }, function(data) {
                            alert("error");
                        });
                }
            };

            $scope.vklogin = function() {
                /// <summary>Login to VKontakte.</summary>
                vkApiService.login()
                    .then(function(data) {
                            if (data) {
                                userApiService.createAccount(data)
                                    .then(function() {
                                        $location.path('/tab/packages');
                                        $scope.$apply();
                                    }, function(data) {
                                        //alert("error");
                                    //    $scope.$apply();
                                    });
                            }
                        },
                        function(data) {
                            // TODO Anton we should show appropriate error message.
                            alert("error");
                            $scope.$apply();
                        });
            }
        }
    ]);
