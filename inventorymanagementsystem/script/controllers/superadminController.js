(function () {
    "use strict";

    angular.module("myApp")
        .controller('superadminController', superadminController);

    superadminController.$inject = ["$scope", "$rootScope"];

    function superadminController($scope, $rootScope) {
        $scope.message = 'My request Controller';
    }


})();