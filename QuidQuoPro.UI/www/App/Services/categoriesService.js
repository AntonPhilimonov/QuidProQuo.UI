angular.module('app.services')
<<<<<<< HEAD
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
=======
    .service('CategoriesService', function () {
        this.getCategories = function (categoryType) {
            var items = [];
            $.get('http://localhost/api/category/', function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].IsCategory === true && data[i].CategoryType === categoryType) {
                        items.push(data[i]);
                     }
>>>>>>> branch_available_ads
                }
            }
        }
    ]);