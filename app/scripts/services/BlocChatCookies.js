(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        this.open = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/new-user-modal.html',
                controller: 'ModalCtrl as modal',
                windowClass: 'modal-window',
                backdrop: 'static'
      // Do something to allow users to set their username  
        
            });
        }
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
