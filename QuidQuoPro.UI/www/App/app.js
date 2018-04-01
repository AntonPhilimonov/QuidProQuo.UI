/// <reference path="Views/login/loginView.html" />
/// <reference path="Views/settings/settingsView.html" />
/// <reference path="Views/settings/settingsView.html" />
angular.module('app',
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
            .state('tab.revorder', {
                url: '/revorder',
                views: {
                    'tab-account': {
                        templateUrl: 'App/Views/order/revorder/revorderView.html',
                        controller: 'RevOrderController'
                    }
                }
            })
            .state('tab.editorder', {
                url: '/editorder',
                views: {
                    'tab-account': {
                        templateUrl: 'App/Views/order/editorder/editorderView.html',
                        controller: 'EditOrderController'
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

               .state('tab.adsinfo', {
                   url: '/adsinfo',
                   views: {
                       'tab-ads': {
                           templateUrl: 'App/Views/ads/adsInfo.html',
                           controller: 'AdsInfoController'
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
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'App/Views/settings/settingsView.html',
                        controller: 'SettingsController'
                    }
                }
            })
            .state('login', {
                url: '/login',
                abstract: false,
                templateUrl: 'App/Views/login/loginView.html',
                controller: 'LoginController'
            })

            .state('tab.list_activ', {
                url: '/list_activ',
                views: {
                    'tab-account': {
                        templateUrl: 'App/Views/account/List_activ.html',
                        controller: 'ListActivController'
                    }
                }
            })
             .state('tab.list_end', {
                 url: '/list_end',
                 views: {
                     'tab-account': {
                         templateUrl: 'App/Views/account/List_end.html',
                         controller: 'ListsControllerEnd'
                     }
                 }
             })
            .state('tab.Reviews', {
                url: '/reviews',
                views: {
                    'tab-account': {
                        templateUrl: 'App/Views/account/Reviews.html',
                        controller: 'ReviewsController'
                    }
                }
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