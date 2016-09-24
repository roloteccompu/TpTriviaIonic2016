// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
      url: '/login',
      views: {
        'principal': {
          templateUrl: 'templates/login.html',
          controller: 'Login'
        }
      }
    })

.state('games', {
      url: '/games/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/games.html',
          controller: 'Games'
        }
      }
    })

  .state('trivia', {
    url: '/trivia/:usuario',
    views: {
      'principal': {
        templateUrl: 'templates/trivia.html',
        controller: 'Trivia'
      }
    }
  })
    .state('perdioTrivia', {
      url: '/perdioTrivia/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/perdioTrivia.html',
          controller: 'PerdioTrivia'
        }
      }
    })
     .state('ganoTrivia', {
      url: '/ganoTrivia/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/ganoTrivia.html',
          controller: 'GanoTrivia'
        }
      }
    })
 
  .state('contacto', {
      url: '/contacto/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/contacto.html',
          controller: 'Contacto'
        }
      }
    })

    .state('piano', {
      url: '/piano/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/piano.html',
          controller: 'Piano'
        }
      }
    })
     .state('controlMovimiento', {
      url: '/controlMovimiento/:usuario',
      views: {
        'principal': {
          templateUrl: 'templates/controlMovimiento.html',
          controller: 'ControlMovimiento'
        }
      }
    })
/*
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
