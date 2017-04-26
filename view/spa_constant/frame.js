/**
 * Created by Administrator on 2017/4/25 0025.
 */
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', 'data', function($routeProvider,Data){
    $routeProvider
        .when('/spa1', {
            templateUrl: 'spa1.html',
            controller: 'spa1Controller'
        })
        .otherwise({
            templateUrl: 'spa2.html',
            controller: 'spa2Controller'
        });

    console.log(Data.title);//constant  可以注入到config

}]);
//constant服务：定义常量用的，这货定义的值当然就不能被改变，它可以被注入到任何地方，但是不能被装饰器(decorator)装饰
app.constant('data', {
    title: 'constant'
});
app.controller('ctrlMain', ['$scope', function ($scope) {
}]);
app.controller('spa1Controller', ['$scope', 'data', function ($scope, Data) {
    console.log(Data.test);//输出spa2 可以通信
}]);
app.controller('spa2Controller', ['$scope', 'data',function ($scope, Data) {
    Data.title = 'spa2';
    console.log(Data.title);//输出constant 不可修改
    //增加属性 spa1Controller使用
    Data.test = '增加test属性';
    $scope.data = Data;
}]);