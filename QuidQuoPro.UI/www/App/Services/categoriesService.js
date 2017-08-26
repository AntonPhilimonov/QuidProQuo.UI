angular.module('app.services')
    .service('CategoriesService', function () {
        this.getCategories = function (categoryType) {
            var items = [];
            $.get('http://localhost/api/category/', function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].IsCategory === true && data[i].CategoryType === categoryType) {
                        items.push(data[i]);
                     }
                }
            },
           'json');
            return items;
        }
    });