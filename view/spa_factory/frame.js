/**
 * Created by Administrator on 2017/4/25 0025.
 */
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider ,$locationProvider){
    $routeProvider
        .when('/spa1', {
            templateUrl: 'spa1.html',
            controller: 'spa1Controller'
        })
        .otherwise({
            templateUrl: 'spa2.html',
            controller: 'spa2Controller'
        })

}]);
//factory
// why:控制器间通讯数据;可以返回任何东西
// what:它是一个可注入的function，
// vs service:它和service的区别就是：factory是普通function，而service是一个构造器(constructor)，这样Angular在调用service时会用new关键字，而调用factory时只是调用普通的function，所以factory可以返回任何东西，而service可以不返回(可查阅new关键字的作用)
app.factory('data', function(){
    var data = {};
    //封装数据或方法，可以通讯数据
    return {title: 'factory'};
});
app.controller('ctrlMain', ['$scope', function ($scope) {
}]);
app.controller('spa1Controller', ['$scope', 'data', function ($scope, Data) {
    $scope.data = Data;
}]);app.controller('spa2Controller', ['$scope', 'data',function ($scope, Data) {
    //alert('spa2Controller');
    Data.title = '共享spa2';
    $scope.data = Data;
}]);