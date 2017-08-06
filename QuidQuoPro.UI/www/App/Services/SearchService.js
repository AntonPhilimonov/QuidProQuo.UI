angular.module('app.services')
    .service('SearchService', function () {
        this.search = function (searchItem) {
            var items = [];

            $.get('http://localhost/api/search', { item: searchItem })
                .done(function (data) {
                    var temp = JSON.parse(data);
                    for (var i = 0; i < temp.length; i++) {
                        items.push(temp[i]);
                    } 
                });
            return items;
        }
    });