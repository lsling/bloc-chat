(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
    };

    return Message;
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();


//(function() {
//  function Room($firebaseArray) {
//    var Room = {};
//    var ref = firebase.database().ref().child("rooms");
//    var rooms = $firebaseArray(ref);
//
//    Room.all = rooms;
//
//    Room.add = function(room) {
//        rooms.$add({ })
//    }
//
//    Room.createRoom = function(name) {
//        rooms.$add(name);
//    };
//
//    return Room;
//  }
//
//  angular
//    .module('blocChat')
//    .factory('Room', ['$firebaseArray', Room]);
//})();
