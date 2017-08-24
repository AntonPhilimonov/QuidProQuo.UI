angular.module('app.services')
    .factory('CategoriesService', [
        '$q',
        '$http',
        function ($q, $http) {
            return {
                getCategories: function(catType) {
                    var deferred = $q.defer();
                    $http({ method: 'GET', url: 'http://localhost/api/category/', params: { 'categoryType': catType}})
                        .then(function success(res) {
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