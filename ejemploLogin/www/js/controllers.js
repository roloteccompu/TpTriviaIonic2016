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
  

  $scope.loginData.username="teccompu2011@gmail.com";
  $scope.loginData.password="myProyect";

  $scope.doLogin=function(){
    console.log("ingrese a la funcion logear");

    firebase.auth().signInWithEmailAndPassword($scope.loginData.username,$scope.loginData.password)
    .catch(function(error){
      console.log("error",error);
    }).then(function(user){
       console.log("respuesta",user);
      
    });
    
  }
  $scope.closeLogin=function(){
    console.log("close Login");
    console.log(firebase)

    firebase.signAuth();
    

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
      //tp manejo de dinero y guardado
      /**/

  }
});

// pasos de logeo
//1 registrar
/// 2 login
//3 verificar 
//4 ingresar 