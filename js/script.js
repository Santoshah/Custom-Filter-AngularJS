var app = angular.module("myApp", []);

app.controller('myController', ['$scope', function($scope){
	var students = [
		{name:"Bikash", gender:1, subject:"Science" },
		{name:"Santosh", gender:1, subject:"Computer" },
		{name:"Alisha", gender:2, subject:"Commerce" },
		{name:"Arun", gender:1, subject:"Computer" },
		{name:"Sanjana", gender:2, subject:"Biology" },
		{name:"Anshul", gender:3, subject:"Technology" }
	]
	
	$scope.students = students;

}])

