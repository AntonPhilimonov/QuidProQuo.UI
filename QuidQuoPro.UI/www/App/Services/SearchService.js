angular.module('app.services')
    .service('SearchService', function () {
        var items = [];
        this.SearchItem = function(item) {
            $.get('http://localhost/api/order?item=' + item, function (data) {
                items = data;
            }, 'json');
            return items;
        }
    });