 /**
 * @function CookiesCtrl (controller)
 * @desc adds a new username to cookies
 */
(function() {
    function CookiesCtrl($uibModalInstance, $cookies) {
        
        this.newUser = function() {
            $cookies.put('blocChatCurrentUser', this.username)
                if(this.username) {
                    console.log(this.username);
                    $uibModalInstance.dismiss();
                }
        } 
    };

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl]);
})();        