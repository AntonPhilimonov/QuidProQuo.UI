angular.module('app.services').factory('UserApiService',
[
    function () {
        return {
            login: function (userName, password) {
                /// <summary>Login to server.</summary>
                /// <param name="userName" type="String">User name.</param>
                /// <param name="password" type="String">Password.</param>
                /// <returns>Return promise object for further work on the caller.</returns>
                if (userName && password) {
                    return $.ajax({
                        type: 'GET',
                        url: encodeURI(PackageUI.AppConstants.PACKAGE_SERVER_API_URL + '/login/Login'),
                        data: { login: userName, key: password }
                    })
                        .then(function () {
                            PackageUI.AppState.LogedOn({});
                            return $.Deferred().done().promise();
                        },
                            function (data) {
                                return $.Deferred().reject.promise();
                            });
                }
                return $.Deferred().reject.promise();
            },

            createAccount: function (account) {
                if (account && account.Name || (account.SystemType === SystemType.Custom && account.Password)) {
                    var ACCOUNT_CREATE_METHOD = '/account/Create';
                    return PackageUI.ApiControllerProxy.post(
                        PackageUI.AppConstants.PACKAGE_SERVER_API_URL + ACCOUNT_CREATE_METHOD,
                        account,
                        true);
                }
                return $.Deferred().reject.promise();
            },

            getCapthca: function () {
                /// <summary>Get captcha value from server.</summary>
                /// <returns>Return promise object for further work on the caller.</returns>
                return $.ajax({
                    method: 'GET',
                    url: encodeURI(PackageUI.AppConstants.PACKAGE_SERVER_API_URL + '/login/Login'),
                    data: { login: userName, key: password }
                })
                    .then(function () {
                        PackageUI.AppState.LogedOn({});
                        return $.Deferred().done().promise();
                    }, function (data) {
                        return $.Deferred().reject.promise();
                    });
            }
        }
    }
]);
