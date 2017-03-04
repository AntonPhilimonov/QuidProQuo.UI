angular.module('app.controllers')
    .controller('SignUpController',
    [
        '$scope',
        '$location',
        'UserApiService',
        function ($scope, $location, userApiService) {
            /// <summary>Controller to Sign up view.</summary>

            $scope.captchaPath = '';
            $scope.captchaInput = '';
            var captchaCounter = 0;

            function requestCaptcha() {
                captchaCounter++;
                var params = $.param({
                    width: 140,
                    height: 50,
                    counter: captchaCounter
                });
                $scope.captchaPath = PackageUI.AppConstants.PACKAGE_SERVER_API_URL + '/captchaApi/GenerateCaptcha?' + params;
                $scope.captchaInput = '';
            }

            function onCreate() {
                requestCaptcha();
            }

            $scope.reloadCaptcha = function () {
                /// <summary>Get captcha method.</summary>
                requestCaptcha();
            };

            onCreate();

        }
    ]);
