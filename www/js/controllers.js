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

.controller('Trivia', function($scope,$state,datos,$cordovaVibration) {

      var indice=0;
      $scope.datos=[];
      $scope.datos=datos;

      $scope.pregunta=$scope.datos[indice].pregunta;
      $scope.opcion1=$scope.datos[indice].respuesta1;
      $scope.opcion2=$scope.datos[indice].respuesta2;
      $scope.opcion3=$scope.datos[indice].respuesta3;
      var correcta=$scope.datos[indice].correcta;

      $scope.respuesta=function(eleccion){

      console.log(typeof(eleccion));
      console.log(typeof($scope.correcta));


                if (eleccion === correcta)
                {
                      indice++;
                      if (indice>5) {
                        $state.go('games');
                      }
                      else{
                          $scope.pregunta=$scope.datos[indice].pregunta;
                          $scope.opcion1=$scope.datos[indice].respuesta1;
                          $scope.opcion2=$scope.datos[indice].respuesta2;
                          $scope.opcion3=$scope.datos[indice].respuesta3;
                      }
                }
                else{
                    console.log("perdiste");//si se equivoca hago que vibre y lo envio a otro state
                    $cordovaVibration.vibrate(200);
                    
                    //redireccionamos
                } 
 }
  $scope.home=function(){
      $state.go('games');

  }

})
.controller('Contacto', function($scope,$state,datos) {
  })
.controller('Piano',function($scope,$cordovaMedia, $ionicPlatform,$timeout,$cordovaNativeAudio){
   
   $ionicPlatform.ready(function() {
      var src = "/android_asset/www/js/necesitoUnAmor.mp3";
      var media = $cordovaMedia.newMedia(src);

      $scope.play = function() {
         media.play();
      };

      $scope.pause = function() {
         media.pause();
      };
      $scope.stop = function() {
         media.stop();
      };
    });

  /*$scope.play=function(src){

      try{
         $cordovaNativeAudio.preloadComplex('musica', 'corazonSerrano.mp3');
          $cordovaNativeAudio.play('musica');

      }
      catch(error){
        alert("entro al catch" + error);
        console.log(error);
      }
  }
  $scope.stop=function(){
     $cordovaNativeAudio.stop('musica');
  }*/

});

