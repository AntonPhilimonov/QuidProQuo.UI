angular.module('app.services')
    .factory('addOrderService', [
        '$http',
        function ($http) {
            return {
                addNewOrder: function (order) {
                    var res = true;
                    $http.post('http://localhost/api/order/', order)
                        .success(function(data, status) {
                        })
                        .error(function(data, status) {
                            res = false;
                        });
                    return res;
                }
            }
        }
    ]);