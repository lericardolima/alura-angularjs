angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

    $http.get('v1/fotos')
    .success((fotos) => {
        $scope.fotos = fotos;
    })
    .error((erro) => console.log(erro))
});