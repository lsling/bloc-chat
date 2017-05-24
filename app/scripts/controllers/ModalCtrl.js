 /**
 * @function ModalCtrl
 * @desc Creates a new room, then dismisses the modal 
 */
(function() {
    function ModalCtrl($uibModalInstance, Room) {
        
        this.createRoom = function(name) {
            Room.createRoom(name);
            $uibModalInstance.close();
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();

        