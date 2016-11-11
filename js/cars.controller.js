app.controller('carsCtrl', function($scope, carsFactory){
	$scope.isOpened = false;
	$scope.startDate = new Date("2016-01-01");
	$scope.endDate = new Date("2016-03-01");
	var brands = [
		{
			brand: 4,
			brandName:"Volvo"
		},
		{
			brand: 7,
			brandName:"Audi"
		},
		{
			brand: 2,
			brandName:"Opel"
		},
		{
			brand: 5,
			brandName:"Citroen"
		},
		{
			brand: 24,
			brandName:"BMW"
		},
		{
			brand: 56,
			brandName:"Nisan"
		},
		{
			brand: 14,
			brandName:"Suzuki"
		},
		{
			brand: 35,
			brandName:"ВАЗ"
		},
		{
			brand: 61,
			brandName:"Ferrari"
		},
		{
			brand: 8,
			brandName:"Kia"
		},
		{
			brand: 11,
			brandName:"Ford"
		},
		{
			brand: 42,
			brandName:"Toyota"
		},
		{
			brand: 47,
			brandName:"Studebaker"
		}


	]
	
	var current_date = new Date("01/01/2016");
	
	carsFactory.all()
        .success(function(data){
            data.cars.forEach(function(item){
            	brands.forEach(function(brand){
            		if(item.brand == brand.brand){
            			item.brandName = brand.brandName;
            			item.modelName = "S-1";
            			item.rentEndDate =  current_date.setDate(current_date.getDate()+3);
            		}
            	});
            });
            data.cars[0].favorite = true;
            $scope.cars = data.cars;            
        })
        .error(function(data){
        	console.log(data);
        });
    
    
    $scope.showFilter = function(){
    	$scope.isOpened = !$scope.isOpened;   	
    };

    $scope.closeFilter = function(){
    	$scope.isOpened = false;	
    };

    $scope.submitFilter = function(){
    	
    };

});