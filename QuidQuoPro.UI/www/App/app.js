﻿angular.module('app',
    [
        'ngSanitize',
        'jm.i18next',
        'ionic',
        'ngCordovaOauth',
        'app.controllers',
        'app.services'
    ])
    .config([
        '$i18nextProvider', function($i18nextProvider) {
            $i18nextProvider.options = {
                lng: 'ru-ru',
                useCookie: false,
                useLocalStorage: false,
                getAsync: false,
                fallbackLng: 'ru-ru',
                resGetPath: 'Locales/__lng__/__ns__.json',
                debug: false
            };
        }
    ])
    .config(function ($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "App/Widgets/Tab/tabs.html"
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'App/Views/account/accountView.html',
                        controller: 'AccountController'
                    }
                }
            })
            .state('tab.ads', {
                url: '/ads',
                views: {
                    'tab-ads': {
                        templateUrl: 'App/Views/ads/adsView.html',
                        controller: 'AdsController'
                    }
                }
            })
            .state('tab.order', {
                url: '/order',
                views: {
                    'tab-order': {
                        templateUrl: 'App/Views/order/orderView.html',
                        controller: 'OrderController'
                    }
                }
            })
            .state('tab.thing', {
                url: '/thing',
                views: {
                    'tab-order': {
                        templateUrl: 'App/Views/order/thing/thingView.html',
                        controller: 'ThingController'
                    }
                }
            })
            .state('tab.service', {
                url: '/service',
                views: {
                    'tab-order': {
                        templateUrl: 'App/Views/order/service/serviceView.html',
                        controller: 'ServiceController'
                    }
                }
            })
            .state('tab.subcateg', {
                url: '/subcateg',
                views: {
                    'tab-order': {
                        templateUrl: 'App/Views/order/subcategory/subcategoryView.html',
                        controller: 'SubcategoryController'
                    }
                }
            })
            .state('tab.addorder', {
                url: '/addorder',
                views: {
                    'tab-order': {
                        templateUrl: 'App/Views/order/addorder/addorderView.html',
                        controller: 'AddOrderController'
                    }
                }
            })
            .state('tab.messages', {
                url: '/messages',
                views: {
                    'tab-messages': {
                        templateUrl: 'App/Views/messages/messagesView.html',
                        controller: 'MessagesController'
                    }
                }
            })
            .state('tab.favorites', {
                url: '/favorites',
                views: {
                    'tab-favorites': {
                        templateUrl: 'App/Views/favorites/favoritesView.html',
                        controller: 'FavoritesController'
                    }
                }
            })
            .state('login', {
                url: '/login',
                abstract: false,
                templateUrl: 'App/Views/login/loginView.html',
                controller: 'LoginController'
            })
            .state('signup', {
              url: '/signup',
              abstract: false,
              templateUrl: 'App/Views/login/signupView.html',
              controller: 'SignUpController'
          });

        if (!PackageUI.AppState.isLoggedOn) {
            $urlRouterProvider.otherwise('/login');
        } else {
            $urlRouterProvider.otherwise('/tab/packages');
        }

    });
angular.module('reusableDirectives', []);
angular.module('app.controllers', ['reusableDirectives']);
angular.module('app.services', []);