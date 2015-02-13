angular.module('starter.controllers',[])

.controller('DashCtrl', function($scope,$http) {


        $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Houston&units=metric&cnt=10').success(function(data){
            $scope.data = data;
            console.log(data);
        });



    });

