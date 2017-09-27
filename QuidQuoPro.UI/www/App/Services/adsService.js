angular.module('app.services')
    .factory('AdsService', [
       '$q',
       '$http',

       function ($q, $http) {
          
           return {

               getOrders: function () {
                   var deferred = $q.defer();
                   $http({ method: 'GET', url: 'http://localhost/api/order/'})
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