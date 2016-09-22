angular.module('starter.services', [])

.factory('datos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  return [{
    id: 0,
    pregunta: 'Capital de Bahamas',
    respuesta1: 'Sucre',
    respuesta2: 'Ottawa',
    respuesta3: ' Nasau',
    correcta:'Nasau'
    
  }, {
    id: 1,
    pregunta: 'Capital de Ecuador',
    respuesta1: 'Quito',
    respuesta2: 'Sucre',
    respuesta3: 'San Salvador',
    correcta:'Quito'
    
  }, {
    id: 2,
    pregunta: 'Capital de Nicaragua ',
    respuesta1: 'Managua',
    respuesta2: 'Montevideo',
    respuesta3: 'Lima',
    correcta:'Managua'
  }, {

    id: 3,
     pregunta: 'Capital de Venezuela',
    respuesta1: 'Sucre',
    respuesta2: 'Santo Domingo',
    respuesta3: 'Caracas',
    correcta:'Caracas'
  }, {
    id: 4,
     pregunta: 'Capital de Jamaica',
    respuesta1: 'Castries',
    respuesta2: 'Kingston',
    respuesta3: 'Tegusigalpa',
    correcta:'Kingston'
  }, {
    id: 5,
     pregunta: 'Capital de Mexico',
    respuesta1: 'Tegusigalpa',
    respuesta2: 'Ciudad de Mexico',
    respuesta3: 'Michoacan',
    correcta:'Ciudad de Mexico'
  
  }];

});
