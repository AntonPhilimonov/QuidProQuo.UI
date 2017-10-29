angular.module('app.services')
    .factory('orderService', [
        '$http',
        function ($http) {
            return {
                addNewOrder: function (order) {
                    var res = true;

                    var req = {
                        method: 'POST',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}'
                        },
                        data: order
                    }
                    $http(req).then(function success() {},
                        function error() {
                            res = false;
                        });
                        
                    return res;
                },
                editOrder: function(order) {
                    var res = true;

                    var req = {
                        method: 'PUT',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}'
                        },
                        data: order
                    }
                    $http(req).then(function success() {},
                    function error() {
                        res = false;
                    });

                    return res;
                },
                deleteOrder: function(id) {
                    var res = true;

                    var req = {
                        method: 'DELETE',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'id': id
                        }
                    }
                    $http(req).then(function success() {},
                    function error() {
                        res = false;
                    });

                    return res;
                }
            }
        }
    ]);