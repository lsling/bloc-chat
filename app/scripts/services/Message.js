(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    return Message;
    };
    

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
