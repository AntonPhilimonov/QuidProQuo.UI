angular.module('app.services')
    .factory('orderService', [
        '$q',
        '$http',
        function ($q, $http) {
            return {
                getOrders: function () {
                    var deferred = $q.defer();

                    var req = {
                        method: 'GET',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}'
                        }
                    }
                    $http(req).then(function success(res) {
                        deferred.resolve(JSON.parse(res.data));
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return deferred.promise;
                },
                findOrders: function (item) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'GET',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'item': item
                        }
                    }
                    $http(req).then(function success(res) {
                        deferred.resolve(JSON.parse(res.data));
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return deferred.promise;
                },
                usersActivOrders: function(id) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'GET',
                        url: 'http://localhost/api/account/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'id': id
                        }
                    }

                    $http(req).then(function success(res) {
                        var temp = JSON.parse(res.data);
                        deferred.resolve(temp.Profile.Orders);
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return deferred.promise;
                },
                addNewOrder: function (order, id) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'POST',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'id': id
                        },
                        data: order
                    }
                    $http(req).then(function success(res) {
                        deferred.resolve(res.data);
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return deferred.promise;
                },
                editOrder: function (order, id) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'PUT',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'id': id
                        },
                        data: order
                    }
                    $http(req).then(function success(res) {
                        deferred.resolve(res.data);
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return deferred.promise;
                },
                deleteOrder: function (id) {
                    var deferred = $q.defer();

                    var req = {
                        method: 'DELETE',
                        url: 'http://localhost/api/order/',
                        params: {
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}',
                            'id': id
                        }
                    }

                    $http(req).then(function success(res) {
                        deferred.resolve(res.status);
                    },
                    function error(res) {
                        deferred.reject(res.status);
                    });
                    return true;
                }
            }
        }
    ]);