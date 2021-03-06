/**
 * @function Room (factory)
 * @desc Creates a new room
 * @param {Array} Room (referencing Firebase database provided from AngularFire)
 */
(function() {
  function Room($firebaseArray) {
    var Room = {};
      
    //query an existing set of data or reference one you intend to populate with data. $firebaseArray ensures it is an array.
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    //$add = adds a new item to the firebase collection 
    Room.add = function(room) {
        rooms.$add({ })
    }

    Room.createRoom = function(name) {
        rooms.$add(name);
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

