 /**
 * @function Message (factory)
 * @desc Gets message for the active room
 * @param {Array} Message
 */
(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    Message.all = messages;

    // Chains child() method with Firebase orderByChild() method to get the roomId child. Firebase equalTo() finds all messages with roomId property equal to the roomId in argument.
    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };
      
    // Sends a message object and submits it to the Firebase server
    Message.send = function(newMessage) {
        messages.$add(newMessage);
        newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
    };
      
    return Message;
    }
    

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
