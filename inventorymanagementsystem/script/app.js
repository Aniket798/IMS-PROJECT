(function (){
    var app = angular.module('myApp', ['ngRoute']);
    app.run(function($rootScope){
        $rootScope.formData=[];
        $rootScope.addData=[{newItem:"item1"},
                             {newItem:"item2"}];
    });

    app.config(function ($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl:'../htmlpages/home.html',
            controller:"homeController",

            })
            .when('/request', {
                templateUrl:'../htmlpages/request.html',
                controller:"requestController",
            })
            .when('/superadmin', {
                templateUrl:'../htmlpages/superadmin.html',
                controller:"superadminController",
            })
            .when('/approval', {
                templateUrl:'../htmlpages/Approval.html',
                controller:"approvalController",
            })
            .when('/newrequest',{
                templateUrl:'../htmlpages/newrequest.html',
                controller:"newRequestController",
            })
            .when('/addItems',{
                templateUrl:'../htmlpages/Additem.html',
                controller:"itemController",
            })
            .otherwise({redirectTo:'/'})
        })        
})();
