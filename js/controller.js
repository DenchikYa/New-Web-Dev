//Модуль tableApp
angular.module('tableApp', []).controller('tableController', function tableController($scope, $http) {
    $scope.gamePlace = [];
    var tr1Table = ['X', 'X', null];
    var tr2Table = ['0', null, null];
    var tr3Table = ['0', 'X', null];

    $http.post("http://localhost:8080/api", {slogan:"client"}, {headers:{'Content-Type': 'application/json'}})
        .then(function (response) {
            console.log(response);
    });

    $scope.gamePlace.push(tr1Table);
    $scope.gamePlace.push(tr2Table);
    $scope.gamePlace.push(tr3Table);

    console.log($scope.gamePlace);
});