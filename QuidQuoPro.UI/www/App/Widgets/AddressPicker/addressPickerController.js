angular.module('app.controllers')
    .controller('AddressPickerController',
    [
        '$scope',
        '$ionicPopup',
        function ($scope, $ionicPopup) {
            $scope.fullAddress = "";

            $scope.temp = {};

            $scope.showPopup = function() {
                $scope.temp = $.extend(true, {}, $scope.address);
                // TODO Anton to Nikolay: просмотри весь код, удали не используемые переменные, в частности myPopup не кем не импользуется! 
                var myPopup = $ionicPopup.show({
                    templateUrl: 'App/Widgets/AddressPicker/addressPickerPopupView.html',
                    title: i18n.t('addressPicker.addressPickerTitleWidget'),
                    scope: $scope,
                    buttons: [
                        {
                            text: i18n.t('addressPicker.cancelButtonCaption'),
                            onTap: function(e) {
                                $scope.address = $scope.temp;
                            }
                        },
                        {
                            text: '<b>' + i18n.t('addressPicker.chooseButtonCaption') + '</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                if (!$scope.validateForm($scope.address)) {
                                    e.preventDefault();
                                } else {
                                    $scope.fillAddress($scope.address);
                                }
                            }
                        }
                    ]
                });
            };

            $scope.validateForm = function(data) {
                return data &&
                    data.country &&
                    data.city &&
                    data.street &&
                    data.homeNumber;
            };

            // TODO Anton to Nikolay: aa не используется.
            $scope.selectOnMap = function ($event, aa) {
                // TODO Anton to Nikolay: alertPopup не используется.
                var alertPopup = $ionicPopup.alert({
                    title: 'TODO Должны открыть карту'
                });

                $event.stopPropagation(); // stop click event on base layout
            };

            $scope.fillAddress = function(address) {
                $scope.fullAddress = getAddressField(address.country) +
                    getAddressField(address.city) + getAddressField(address.street) +
                    getAddressField(address.homeNumber) + getAddressField(address.kvNumber);
                $scope.fullAddress = $scope.fullAddress.substring(2);
                if (!$scope.fullAddress) {
                    $scope.fullAddress = i18n.t('addressPicker.addressPickerTitleWidget');
                    // TODO Anton to Nikolay: address не используется.
                    address = {};
                }
            }
            getAddressField = function(value) {
                return (value) ? ", " + value : "";
            }

            $scope.fillAddress($scope.address);
        }
    ]);

// TODO Anton to Nikolay: вынеси директиву в отдельный файл
angular.module('reusableDirectives')
.directive('addressSelector', [function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "App/Widgets/AddressPicker/addressPickerView.html",
        // TODO Anton to Nikolay: нудно ли определние link? если да то тогода оставь пустой функцией, раз ты не используешь переменные.
        link: function (scope, element, attr) { },
        scope: {
            address: '='
        },
        controller: 'AddressPickerController'
    }
}]);