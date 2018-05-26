

    angular
        .module("myApp")
        .controller('homeController', homeController);

    function homeController($scope, $rootScope) {
        
        init();
        
        function init() {
            $scope.message = 'IMS PROJECT';
            
            
            initEvents();
        }
        function initEvents() {
            $('.card')
                // if a direction if specified it will be obeyed
                .transition('horizontal flip in')
                ;
        }
    }
