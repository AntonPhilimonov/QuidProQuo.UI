angular.module('app.services')
    .factory('SearchService', [
        '$http',
        function($http) {
            return {
                search: function (searchItem) {
                    var items = [];

                    var req = {
                        method: 'GET',
                        url: 'http://localhost/api/search/',
                        params: {
                            'item': searchItem,
                            'access_token': '{D603EAE7-6804-42F8-8332-5136C2EE20C9}'
                        }
                    }
                    $http(req).then(function success(data) {
                        var temp = JSON.parse(data);
                        for (var i = 0; i < temp.length; i++) {
                            items.push(temp[i]);
                        }
                    });
                    return items;
                }
            }
        }
    ]);