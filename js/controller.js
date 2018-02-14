//Модуль tableApp
angular.module('tableApp', []).controller('tableController', function tableController($scope) {
    $scope.gamePlace = [];
    var tr1Table = ['X', 'X', null];
    var tr2Table = ['0', null, null];
    var tr3Table = ['0', 'X', null];

    $scope.gamePlace.push(tr1Table);
    $scope.gamePlace.push(tr2Table);
    $scope.gamePlace.push(tr3Table);

    console.log($scope.gamePlace);
});