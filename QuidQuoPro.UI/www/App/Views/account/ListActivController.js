angular.module('app.controllers')
    .controller('ListActivController', function ($scope, $location, localStorage) {
        function onCreate(parameters) {
            $scope.orders = [
            {
                objectBase: {
                    ID: 1,
                    Title: "service 1",
                    Description: "anything service 1",
                    CategoryItem: null,
                    Address: null
                },
                ID: 1,
                DateTime: "05.08.2000"
            },
            {
                objectBase: {
                    ID: 2,
                    Title: "service 2",
                    Description: "anything service 2",
                    CategoryItem: null,
                    Address: null
                },
                ID: 2,
                DateTime: "05.08.2001"
            }
            ];
        }
        onCreate();
        
        $scope.revOrder = function(order) {
            localStorage.set(order);
            $location.path('/tab/revorder');
        }
    });