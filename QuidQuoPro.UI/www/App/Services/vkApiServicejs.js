angular.module('app.services').factory('VkApiService',
[
    '$cordovaOauth',
    '$q',
    function ($cordovaOauth, $q) {
        var VK_URL = 'https://api.vk.com/method/';
        var VK_PERMISSIONS = ['wall, friends'];

        function getUserInfo(userId, fields) {
            var GET_USER_INFO_METHOD_NAME = 'users.get';

            return PackageUI.ApiControllerProxy.get(
                VK_URL + GET_USER_INFO_METHOD_NAME,
                {
                    access_token: PackageUI.AppState.VkAccessToken,
                    user_ids: userId,
                    fields: fields
                },
                true);
        }

        function getProfileInfo() {
            var GET_PROFILE_INFO_METHOD_NAME = 'account.getProfileInfo';
            return $.ajax({
                method: 'GET',
                url: encodeURI(VK_URL + GET_PROFILE_INFO_METHOD_NAME),
                data: { access_token: PackageUI.AppState.VkAccessToken }
            });
        }

        return {
            login: function () {
                /// <summary>Login to VK.</summary>
                var deferred = $q.defer();
                if (!PackageUI.AppState.VkAccessToken) {
                    $cordovaOauth.vkontakte(PackageUI.AppConstants.PACKAGE_VK_APP_ID, VK_PERMISSIONS)
                    .then(
                        function (result) {
                            if (result && result.access_token) {
                                PackageUI.AppState.VkLogedOn(result.access_token, result.expires_in);
                                getUserInfo(null, 'contacts, nickname,screen_name, maiden_name, sex, bdate, city, country')
                                    .then(function (data) {
                                        if (data.response && data.response.length === 1) {
                                            var user = new User();
                                            user.FirstName = data.response[0].first_name;
                                            user.SecondName = data.response[0].last_name;
                                            user.PhoneNumber = data.response[0].mobile_phone;
                                            user.BirthDate = data.response[0].bdate;
                                            user.Sex = data.response[0].sex;

                                            var account = new Account();
                                            account.Name = data.response[0].uid;
                                            account.SystemType = SystemType.Vkontacte;
                                            account.IsAuthenticated = true;
                                            account.User = user;
                                            PackageUI.AppState.LogedOn(account);
                                            return deferred.resolve(account);
                                        }
                                        return deferred.reject();
                                    }, function (data) {
                                        return deferred.reject(data);
                                    });

                                return deferred.promise;
                            }
                            // TODO Anton unknown error.
                            return deferred.reject();
                        },
                        function (error) {
                            // TODO Anton need to log, and notify user about problem
                            return deferred.reject();
                        });
                    return deferred.promise;
                } else {
                    return deferred.promise.resolve();
                }
            }
        }
    }
]);