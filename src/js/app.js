'use strict';

angular.module('dissdoc', [

])
    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }]);