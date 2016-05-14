var app = angular.module('MyApp', []);

app.controller('MyController',['$scope', '$http', function($scope, $http){
    $scope.greeting = "Hello World";
}]);
