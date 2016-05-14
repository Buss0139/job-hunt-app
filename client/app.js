var app = angular.module('MyApp', ['ui-router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,
$urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('sample', {
            url: '/sample',
            templateUrl: 'views/sample.html',
            controller: 'SampleController',
            controllerAs: 'sample'
        });

    $locationProvider.html5Mode(true);
}]);


app.controller('MyController',['$scope', '$http', function($scope, $http){
    $scope.greeting = "Hello World";
}]);

app.controller('MainController',['$scope', '$http', function($scope, $http){
    var main = this;
    main.mainPageText = "This is the main page";
}]);


app.controller('SampleController', ['$scope', '$http', function ($scope, $http) {
    var sample = this;
    // $http.get('/sample').then(function(response){
    //     sample.responseStuff = response.data;
    // });
}]);
