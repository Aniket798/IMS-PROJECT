

    angular
        .module("myApp")
        .controller('itemController', itemController);


    function itemController($scope, $rootScope) {
        $scope.add=function(){
            $rootScope.addData.push({newItem:$scope.new});
            console.log($rootScope.addData);
        }
    }


        

    



