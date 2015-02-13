angular.module('starter.services', [])
.factory("WeatherAPI",function($http){




        return{
            getData:function(){
                $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Houston&units=metric&cnt=7');
            }
        };


    });


