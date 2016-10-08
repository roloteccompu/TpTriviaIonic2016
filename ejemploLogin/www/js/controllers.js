angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('loginFirebase', function($scope, $stateParams) {
  
  var name, email, photoUrl, uid,token;

  $scope.loginData.username="";
  $scope.loginData.password="";

  $scope.estaActivo=function(){
      var user = firebase.auth().currentUser;
      if (user) {
      console.info("usuario activo",user);
      var user = firebase.auth().currentUser;
      
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid;
      token=user.getToken();
            console.info("nombre",name);
            console.info("email",email);
            console.info("imagen",photoUrl);
            console.info("id",uid);
            console.info("token",token); 
            // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
                   //usuario fecha cantidad de dinero id  md5 javascript
                  //videos de mogol bd
                   //https://www.mongodb.com/presentations/conceptos-basicos-seminario-web-1-introduccion-a-nosql?p=573dd1981b55a2267541cb06&utm_campaign=Int_WB_Back%20to%20Basics%201%20%28Spanish%29_05_16_EMEA%20-%20Follow%20Up&utm_medium=email&utm_source=Eloqua
                  //https://www.mongodb.com/presentations/conceptos-basicos-seminario-web-3-diseno-de-esquemas-orientado-a-documentos?p=575575a66bac6fcc41149582&utm_campaign=Int_WB_Back%20to%20Basics%203%20%28Spanish%29_06_16_EMEA%20-%20Follow%20Up&utm_medium=email&utm_source=Eloqua
      //jueos del tp
//generador de desafios ,circulo de usuarios en un circulo ellos pueden establecer desafios om puden esntrar dentro del desafio de otros usuarios
// al idea es que el desafio pone en juego una apuesta de los usuarios los desafios pueden ser aceptados por una  ovarias users un usuario solo
// tiempo limite , ver si esta activo el usuario fecha de inicio y de fin


//batalla naval  cuatro botones  o cuatro espacios el que acpta el desafio pone en juego su apuesta optando por alguna posicion del tablero 
//solo se empieza cuando los dos apostaron manejo del credito para el juego de cada uno tiempo de espera de reconexion 

// el credito se carga a traves de un codigo qr a travez de la camara 

      }  
      else {
      console.info("no esta activo",user);
      }
  }

  $scope.registrarse=function(){
        console.log("registro");
        firebase.auth().createUserWithEmailAndPassword($scope.loginData.username,$scope.loginData.password)
        .then(function(respuesta){
          console.info(respuesta,"se registro");
        }).catch(function(error) {
  // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.info(errorCode,"codigo de error");
        console.info(errorMessage,"mensaj  de error");
        });
  }
  $scope.doLogin=function(){
        console.log("ingrese a la funcion logear");

        firebase.auth().signInWithEmailAndPassword($scope.loginData.username,$scope.loginData.password)
        .catch(function(error){
        console.log("error al logear",error);
        }).then(function(user){
         console.log("se logeo",user);

        });
    
  }
  $scope.closeLogin=function(){
    console.log("close Login");

        firebase.auth().signOut().then(function() {
        console.log("cerrando sesion");
        console.info(firebase,"variable global firebase");
        }, function(error) {
        // An error happened.
        });
  }
  $scope.resetearPassword=function(){
        console.log("resetear");
        firebase.auth().sendPasswordResetEmail($scope.loginData.username).then(function(respuesta){
        console.log(respuesta);
        console.info(respuesta);

        }).catch(function(error){
        console.info(error);
        });
  }
    $scope.verificarMail=function(){
     
        var user=firebase.auth().currentUser;
        if(user.emailVerified){
        console.log("esta verificado");
        }else{
        firebase.auth().currentUser.sendEmailVerification();
        console.log("no verifico");
        }
      
  }
});

// pasos de logeo
//1 registrar
/// 2 login
//3 verificar 
//4 ingresar 