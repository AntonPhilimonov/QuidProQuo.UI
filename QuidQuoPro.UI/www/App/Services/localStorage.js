angular.module('app.services')
    .service('localStorage', function() {
        var _object;
        return {
            set: function(object) {
                _object = object;
            },
            get: function() {
                return _object;
            }
        }
    });