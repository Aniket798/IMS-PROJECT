 angular
        .module("myApp")
        .controller('requestController', requestController);


    function requestController($scope, $rootScope) {
        if($rootScope.formData.length==0){
        $scope.myValue;
        }
    }

