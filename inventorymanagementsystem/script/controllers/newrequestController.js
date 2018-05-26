(function () {
    "use strict";

    angular
        .module("myApp")
        .controller('newRequestController', newRequestController);

    newRequestController.$inject = ["$scope", "$rootScope"];

    function newRequestController($scope, $rootScope) {

        $scope.submitData=function(){
            $rootScope.formData.push({customname:$scope.Dname,
                customid:$scope.Demail,
                Quantity:$scope.Dquantity,
                Item:$scope.Ditem,
                 Status:"pending.."});

            console.log($rootScope.formData);

        }
        
    }


})();