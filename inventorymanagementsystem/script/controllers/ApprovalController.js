(function () {
    "use strict";
    angular
        .module("myApp")
          .controller('approvalController', approvalController);

    approvalController.$inject = ["$scope", "$rootScope"];

    function approvalController($scope, $rootScope) {
        $scope.message = 'approval controller';
        $scope.approve=function(x){
            x.Status="Approved";
            console.log($rootScope.formData);
        }

        $scope.reject=function(x){
            x.Status="Rejected";
            console.log($rootScope.formData);

        }

    }


})();