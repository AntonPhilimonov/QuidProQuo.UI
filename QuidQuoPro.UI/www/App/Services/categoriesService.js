angular.module('app.services')
    .service('CategoriesService', function () {
        var items = [];
        this.getCategories = function (categoryType) {
            $.get('http://localhost/api/categories/', function (data) {
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