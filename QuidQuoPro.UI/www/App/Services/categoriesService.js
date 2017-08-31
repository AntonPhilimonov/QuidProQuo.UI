angular.module('app.services')
    .factory('CategoriesService', [
        '$q',
        '$http',
        function($q, $http) {
            return {
                getCategories: function(catType) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'GET',
                        url: 'http://localhost/api/category/',
                        params: {
                            'categoryType': catType,
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}'
                        }
                    }
                    $http(req).then(function success(res) {
                                deferred.resolve(res.data);
                            },
                            function error(res) {
                                deferred.reject(res.status);
                            });
                    return deferred.promise;
                }
            }
        }
    ]);