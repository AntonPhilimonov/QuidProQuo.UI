﻿angular.module('app.controllers')
    .service('ThingOrService', function() {
        var _title = '';
        return {
            setTitle: function(title) {
                _title = title;
            },
            getTitle: function() {
                return _title;
            }
        }
    });