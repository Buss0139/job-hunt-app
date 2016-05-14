var app = angular.module('MyApp', ['ui-router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,
$urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
        // .state('sample', {
        //     url: '/sample',
        //     templateUrl: 'views/sample.html',
        //     controller: 'MainController',
        //     controllerAs: 'sample'
        // });

    $locationProvider.html5Mode(true);
}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $scope.greeting = "Hello world";
    $scope.mainPageText = "This is the main page";
    $scope.samplePageText = "This is a sample page";
}]);
