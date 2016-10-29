angular.module('starter.controllers', [])

.controller('Login', function($scope,$state,$stateParams,$cordovaVibration) {
      $scope.user = {
      Nombre:  "Anonimo"
      }
      $scope.games=function(){
        try {
           $cordovaVibration.vibrate(60);
        }
        catch(error){
            console.log( error +"la pc no vibra");
        }
          $state.go('games',{"usuario":$scope.user.Nombre});
        
        }
      
})
.controller('Games', function($scope,$state,$stateParams) {
       
       $scope.usuario=$stateParams.usuario;

        $scope.contacto=function(){
              $state.go('contacto',{"usuario":$scope.usuario});
               $cordovaVibration.vibrate(60);
        }
        $scope.trivia=function(){
              $state.go('trivia',{"usuario":$scope.usuario});
               $cordovaVibration.vibrate(60);
        }
})
.controller('Trivia', function($scope,$state,datos,$cordovaVibration,$stateParams,$timeout) {
 
  
    $scope.usuario=$stateParams.usuario;
   
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

                        $state.go('ganoTrivia',{"usuario":$scope.usuario});
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
                 console.log("perdiste");
                try{
               
                    //si se equivoca hago que vibre y lo envio a otro state
                  
                   $cordovaVibration.vibrate(50);
                    }
                    catch(error){
                      console.log("en un pc no vibra")
                    }
                    $state.go("perdioTrivia",{"usuario":$scope.usuario});
                    //redireccionamos
                } 
      }
      $scope.home=function(){
         
          $state.go('games',{"usuario":$scope.usuario});
             $cordovaVibration.vibrate(60);

      }
       $scope.games=function(){
         $state.go('games',{"usuario":$scope.usuario});
             $cordovaVibration.vibrate(60);

    }

})
.controller('PerdioTrivia', function($scope,$cordovaVibration,$state,$stateParams,$timeout) {

    $scope.usuario=$stateParams.usuario;
        $scope.trivia=function(){
           try{
             $cordovaVibration.vibrate(60);
              }
              catch(error){
                console.log("en un pc no vibra")
              }
            $state.go('trivia',{"usuario":$scope.usuario});
        }
         $scope.games=function(){
       try{
             $cordovaVibration.vibrate(60);
              }
              catch(error){
                console.log("en un pc no vibra")
              }   
            $state.go('games',{"usuario":$scope.usuario});
        }

    $scope.usuario=$stateParams.usuario;


   $scope.misMensajes=[];     
  
    $scope.resultados=function(){
       $state.go("resultadosTrivia",{"usuario":$scope.usuario});
  }
  
   $scope.volver=function(){
       $state.go("perdioTrivia",{"usuario":$scope.usuario});
  }
})
.controller('GanoTrivia', function($scope,$cordovaVibration,$state,$stateParams) {
   
  $scope.usuario=$stateParams.usuario;
    $scope.games=function(){
       try{
             $cordovaVibration.vibrate(60);
              }
              catch(error){
                console.log("en un pc no vibra")
              }   
            $state.go('games',{"usuario":$scope.usuario});
        }
  })
.controller('Contacto', function($scope,$stateParams,$state) {
  
  $scope.usuario=$stateParams.usuario;
    $scope.games=function(){
        $state.go('games',{"usuario":$scope.usuario});
        }
  })

.controller('Piano',function($scope,$cordovaMedia, $ionicPlatform,$timeout,$cordovaVibration,notasMusicales,$state,$stateParams){
  
        $scope.usuario=$stateParams.usuario;
          $scope.games=function(){
              $state.go('games',{"usuario":$scope.usuario});
          }

        var canciones=[];
          canciones=notasMusicales; 

         var media0=$cordovaMedia.newMedia(canciones[0].nota);
         var media1=$cordovaMedia.newMedia(canciones[1].nota);
         var media2=$cordovaMedia.newMedia(canciones[2].nota);
         var media3=$cordovaMedia.newMedia(canciones[3].nota);
          
         var controlador=$cordovaMedia.newMedia(canciones[0].nota); 

         $scope.play=function(indice){
          //   $cordovaVibration.vibrate(50);

          try{
              switch(indice){
                case 0:   
                       if(controlador===media0){
                            media0.play();
                            controlador=media0;
                       }
                       else{
                            controlador.stop();
                            media0.play();
                            controlador=media0;
                       }
                        
                break;  
                case 1: if(controlador===media1){
                            media1.play();
                            controlador=media1;
                       }
                       else{
                            controlador.stop();
                            media1.play();
                            controlador=media1;
                       }
                break;
                case 2: if(controlador===media2){
                            media2.play();
                            controlador=media2;
                       }
                       else{
                            controlador.stop();
                            media2.play();
                            controlador=media2;
                       }
                break;
                case 3: if(controlador===media3){
                            media3.play();
                            controlador=media3;
                       }
                       else{
                            controlador.stop();
                            media3.play();
                            controlador=media3;
                       }
                break;
              }
          }
          catch(error)
          {
            alert(error +"en el switch");
          }
       }
       $scope.pause=function(){
           $cordovaVibration.vibrate(50);
         controlador.pause();
       }   
      
       $scope.stop=function(){
           $cordovaVibration.vibrate(50);
           controlador.stop();
       }
})
.controller('ControlMovimiento', function($scope,$state,$stateParams,$cordovaDeviceMotion,$cordovaVibration,
  $cordovaMedia, $ionicPlatform,notasMusicales) {
      
          $scope.usuario=$stateParams.usuario;
          $scope.games=function(){
              $state.go('games',{"usuario":$scope.usuario});
          }
          var canciones=[];
          canciones=notasMusicales; 

         var media0=$cordovaMedia.newMedia(canciones[0].nota);
         var media1=$cordovaMedia.newMedia(canciones[1].nota);
         var media2=$cordovaMedia.newMedia(canciones[2].nota);
         var media3=$cordovaMedia.newMedia(canciones[3].nota);
         var media4=$cordovaMedia.newMedia(canciones[4].nota);
          
         var controlador=$cordovaMedia.newMedia(canciones[0].nota); 

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
                            $scope.VistaX="";
                            $scope.VistaY="";
                            $scope.VistaZ="";
                            $scope.VistaTimestamp="";
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

                  $scope.VistaX=$scope.measurements.x.toString()+"px";
                  $scope.VistaY=$scope.measurements.y.toString()+"px"; 
                  $scope.VistaZ=$scope.measurements.z.toString()+"px";
                  $scope.VistaTimestamp=$scope.measurements.timestamp.toString()+"px";   
                  
                  if ($scope.measurements.x >3 &&  $scope.measurements.x <7) {
                      $scope.play(0);//inclinado a la izquierda aguila
                    }
                    else if($scope.measurements.x > -7 && $scope.measurements.x <-3){
                              $scope.play(1);//inclinado a la derecha leon
                          }
                          else if($scope.measurements.y >9.1 && $scope.measurements.y <9.6){
                                    $scope.play(2); //parado perro
                                }
                                else if($scope.measurements.z <1.5 && $scope.measurements.z > -1.5){
                                         $scope.play(3); //parado perro
                                      }
                                      else if($scope.measurements.z >-10  && $scope.measurements.z < -9){
                                        $scope.play(4);//volteado
                                      }
                     //$cordovaVibration.vibrate(150);
                     //si x esta entre 2 y 6 esta inclinado a la izquierda 
                     //si x esta entre -2 y -6 esta inclinado a la derecha
                     //si z esta entre 1 y -1 esta parado
                     //si z esta entre 1 y -1 esta acostado
                     //si z esta entre -10 y -9 esta dado vueltA        
           
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
           $scope.play=function(indice){
          

          try{
              switch(indice){
                case 0:   
                       if(controlador===media0){
                            media0.play();
                            controlador=media0;
                       }
                       else{
                            controlador.stop();
                            media0.play();
                            controlador=media0;
                       }
                        
                break;  
                case 1: if(controlador===media1){
                            media1.play();
                            controlador=media1;
                       }
                       else{
                            controlador.stop();
                            media1.play();
                            controlador=media1;
                       }
                break;
                case 2: if(controlador===media2){
                            media2.play();
                            controlador=media2;
                       }
                       else{
                            controlador.stop();
                            media2.play();
                            controlador=media2;
                       }
                break;
                case 3: if(controlador===media3){
                            media3.play();
                            controlador=media3;
                       }
                       else{
                            controlador.stop();
                            media3.play();
                            controlador=media3;
                       }
                break;
                case 4: if(controlador===media4){
                            media4.play();
                            controlador=media4;
                       }
                       else{
                            controlador.stop();
                            media4.play();
                            controlador=media4;
                       }
                break;
              }
          }
          catch(error)
          {
            alert(error +"en el switch");
          }
       }
       $scope.pause=function(){
           $cordovaVibration.vibrate(50);
         controlador.pause();
       }   
      
       $scope.stop=function(){
           $cordovaVibration.vibrate(50);
           controlador.stop();
       }




  });

