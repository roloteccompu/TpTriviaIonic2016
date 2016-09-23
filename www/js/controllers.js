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
      $scope.correcta=$scope.datos[indice].correcta;

      $scope.respuesta=function(eleccion,correcta){
      
                if (eleccion ==correcta)
                {
                      indice++;
                      if (indice>5) {
                        $state.go('ganoTrivia');
                      }
                      else{
                          $scope.pregunta=$scope.datos[indice].pregunta;
                          $scope.opcion1=$scope.datos[indice].respuesta1;
                          $scope.opcion2=$scope.datos[indice].respuesta2;
                          $scope.opcion3=$scope.datos[indice].respuesta3;
                          $scope.correcta=$scope.datos[indice].correcta;
                      }
                }
                else{
                    console.log("perdiste");//si se equivoca hago que vibre y lo envio a otro state
                   $cordovaVibration.vibrate(150);
                    $state.go("perdioTrivia");
                    //redireccionamos
                } 
 }
  $scope.home=function(){
      $state.go('games');

  }

})
.controller('PerdioTrivia', function($scope) {
  })
.controller('GanoTrivia', function($scope) {
  })
.controller('Contacto', function($scope) {
  })
.controller('Piano',function($scope,$cordovaMedia, $ionicPlatform,$timeout,$cordovaNativeAudio){
 /*  
   var media=new Media();

      $scope.play = function() {
        var src = "/android_asset/www/js/necesitoUnAmor.mp3";
       media = $cordovaMedia.newMedia(src);
         media.play();
      };

      $scope.pause = function() {
         media.pause();
      };
      $scope.stop = function() {
         media.stop();
      };
    

  $scope.play=function(src){

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

})
.controller('ControlMovimiento', function($scope,$cordovaDeviceMotion) {
  
    $scope.Watching="mensaje";
      $scope.options = { 
    frequency: 100, // Measure every 100ms
    deviation : 25  // We'll use deviation to determine the shake event, best values in the range between 25 and 30
};
 
// Current measurements
$scope.measurements = {
    x : null,
    y : null,
    z : null,
    timestamp : null
}
 
// Previous measurements    
$scope.previousMeasurements = {
    x : null,
    y : null,
    z : null,
    timestamp : null
}

//Start Watching method

//http://www.gajotres.net/detecting-device-motion-with-ionic-framework-and-ngcordova/   ejemplo device motion
$scope.startWatching = function() {   
      
      $scope.Watching="startWatching";
      console.log("rotacion");  
 
    // Device motion configuration
    $scope.watch = $cordovaDeviceMotion.watchAcceleration($scope.options);
 
    // Device motion initilaization
    $scope.watch.then(null, function(error) {
        console.log('Error');
        alert(error);
    },function(result) {
 
        // Set current data  
        $scope.measurements.x = result.x;
        $scope.measurements.y = result.y;
        $scope.measurements.z = result.z;
        $scope.measurements.timestamp = result.timestamp;                 
 
        // Detecta shake  
        $scope.detectShake(result);  
 
    });     
}; 

$scope.stopWatching = function() {  
    $scope.watch.clearWatch();
} 


 $scope.detectShake = function(result) { 
 
    //Object to hold measurement difference between current and old data
    var measurementsChange = {};
 
    // Calculate measurement change only if we have two sets of data, current and old
    if ($scope.previousMeasurements.x !== null) {
        measurementsChange.x = Math.abs($scope.previousMeasurements.x, result.x);
        measurementsChange.y = Math.abs($scope.previousMeasurements.y, result.y);
        measurementsChange.z = Math.abs($scope.previousMeasurements.z, result.z);
    }
 
    // If measurement change is bigger then predefined deviation
    if (measurementsChange.x + measurementsChange.y + measurementsChange.z > $scope.options.deviation) {
        $scope.stopWatching();  // Stop watching because it will start triggering like hell
        console.log('Shake detected'); // shake detected
        setTimeout($scope.startWatching(), 1000);  // Again start watching after 1 sex
 
        // Clean previous measurements after succesfull shake detection, so we can do it next time
        $scope.previousMeasurements = { 
            x: null, 
            y: null, 
            z: null
        }               
 
    } else {
        // On first measurements set it as the previous one
        $scope.previousMeasurements = {
            x: result.x,
            y: result.y,
            z: result.z
        }
    }           
 
}   



  });

