(function() {
    function HomeCtrl($uibModal, $scope, Room) {
        this.rooms = Room.all;
        
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/room-modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', '$scope', 'Room', HomeCtrl]);
})();