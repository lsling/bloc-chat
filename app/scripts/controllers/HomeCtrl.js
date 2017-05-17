(function() {
    function HomeCtrl($scope, $uibModal, Room, Message) {
        
        this.currentRoom = null;
        
        this.rooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/room-modal.html',
                controller: 'ModalCtrl as modal',
                windowClass: 'modal-window'
            });
            
            modalInstance.result.then(function(name) {
				Room.addRoom(name);
			});
        };
        
        this.viewRoom = function(room) {
            room.currentRoom = room;
            room.messages = Message.getByRoomId(room.currentRoom.$id);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();