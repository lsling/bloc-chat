(function() {
    function HomeCtrl($uibModal, $scope, Room) {
        this.rooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/room-modal.html',
                controller: 'ModalCtrl as modal',
            });
            
            modalInstance.result.then(function(name) {
				Room.addRoom(name);
			});
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', '$scope', 'Room', HomeCtrl]);
})();