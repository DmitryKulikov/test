app.factory('carsFactory', function($http) {
	var cars = {};

    cars.all = function(){
        return $http.get('cars.js');
    }

    return cars;
    
});