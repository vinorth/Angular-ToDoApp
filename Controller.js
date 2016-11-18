app.controller('ToDoController', function ($scope) {

	$scope.ToDos = [{
		'Title': "First to Do",
		'Completed': false
	}];

	$scope.AddToDo = function(){
		$scope.ToDos.push({'Title':$scope.newToDo, 'Completed':false});	
		$scope.newToDo = "";
	};

	$scope.ClearToDos = function(){
		$scope.ToDos = $scope.ToDos.filter(function (item) {
			return !item.Completed;
		});
	};

});