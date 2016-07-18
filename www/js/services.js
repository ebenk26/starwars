angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Luke Skywalker',
    lastText: 'Dude, carefull, dart vader are looking you !',
    face: 'img/luke.jpg'
  }, {
    id: 1,
    name: 'Dart Vader',
    lastText: 'Hey, have you check my new profil picture :)',
    face: 'img/darthvader.jpg'
  }, {
    id: 2,
    name: 'Yo Yo Yoda',
    lastText: 'Son, u must much learn to fight against dart vader',
    face: 'img/yoda.jpg'
  }, {
    id: 3,
    name: 'r2-d2',
    lastText: '*beep*',
    face: 'img/r2d2.jpg'
  }, {
    id: 4,
    name: 'c3po',
    lastText: 'Hey, my name is C3PO not CEPO !!!',
    face: 'img/c3po.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
