angular.module('starter.services', [])

.factory('datos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  return [{
    id: 0,
    pregunta: 'Ben Sparrow uno',
    respuesta1: 'la pregunta uno?',
    respuesta2: ' la pregunta uno?',
    respuesta3: ' la pregunta uno?'
    
  }, {
    id: 1,
   pregunta: 'Ben Sparrow dos',
    respuesta1: 'respuestas  dos?',
    respuesta2: 'respuestas  dos?',
    respuesta3: 'respuestas  dos?'
  }, {
    id: 2,
    pregunta: 'Ben Sparrow tres',
    respuesta1: 'You on your way?',
    respuesta2: 'You on your way?',
    respuesta3: 'You on your way?'
  
  }];

});
