var app = angular.module('app', [
    'ngMaterial'
])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    }).run(function ($rootScope, Auth, ImageUrl) {
        $rootScope.Auth = Auth;
        $rootScope.ImageUrl = ImageUrl;
        $rootScope.LibraryUrl = {
            tmb: function (instance) {
                return BASE_URL + '/uploads' + '/tmb/' + instance.path + '/' + instance.name;
            },
            small: function (instance) {
                return BASE_URL + '/uploads' + '/100/' + instance.path + '/' + instance.name;
            },
            medium: function (instance) {
                return BASE_URL + '/uploads' + '/300/' + instance.path + '/' + instance.name;
            },
            medium380: function (instance) {
                return BASE_URL + '/uploads' + '/380/' + instance.path + '/' + instance.name;
            },
            toSize: function (instance, size) {
                return BASE_URL + '/uploads' + '/' + size + '/' + instance.path + '/' + instance.name;
            },
            original: function (instance) {
                return BASE_URL + '/uploads' + '/' + instance.path + '/' + instance.name;
            },
            local: function (instance, size) {
                return BASE_URL + '/image/' + size + '/' + instance.path + '/' + instance.name;
            }
        };
    });