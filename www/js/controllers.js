angular.module('starter.controllers', [])

.controller('Login', function($scope,$state) {

  $scope.cambiarEstado=function(){
      $state.go('games');
    console.log("entro login");
  }

})
.controller('Games', function($scope,$state) {
 

  $scope.elegirJuego=function(juego){
    $state.go(juego);

  }
})

.controller('Trivia', function($scope,$state,datos) {
 
 var indice=0;
 $scope.datos=[];
 $scope.datos=datos;
console.log($scope.datos);

 $scope.pregunta=$scope.datos[indice].pregunta;
 $scope.opcion1=$scope.datos[indice].respuesta1;
 $scope.opcion2=$scope.datos[indice].respuesta2;
 $scope.opcion3=$scope.datos[indice].respuesta3;

 $scope.respuesta=function(respuesta){
        if (respuesta===$scope.datos[indice].respuesta1) {
            indice++;
          $scope.pregunta=$scope.datos[indice].pregunta;
 $scope.opcion1=$scope.datos[indice].respuesta1;
 $scope.opcion2=$scope.datos[indice].respuesta2;
 $scope.opcion3=$scope.datos[indice].respuesta3;
        }
        else{
          //si se equivoca hago que vibre y lo envio a otro state
          console.log("perdiste");
        }
 }

  $scope.home=function(){
      $state.go('games');

    console.log("entro login");
  }

});
