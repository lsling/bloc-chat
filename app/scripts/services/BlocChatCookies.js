 /**
 * @function BlocChatCookies (service)
 * @desc Checks for existing username, invokes modal if user does not exist, saves the created cookie
 * @param {string} $cookies
 */
(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/new-user-modal.html',
                controller: 'CookiesCtrl as cookies',
                windowClass: 'modal-window',
                backdrop: 'static'
        
            });
        }
    }
  

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
