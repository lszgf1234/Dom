/**
 * Created by Administrator on 2017/4/25 0025.
 */
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/spa1', {
            templateUrl: 'spa1.html',
            controller: 'spa1Controller'
        })
        .otherwise({
            templateUrl: 'spa2.html',
            controller: 'spa2Controller'
        });
}]);
//value这货可以是string,number甚至function,它和constant的不同之处在于，它可以被修改，不能被注入到config中，但是它可以被decorator装饰
app.value('data', {
    title: 'constant'
});
app.controller('ctrlMain', ['$scope', function ($scope) {
}]);
app.controller('spa1Controller', ['$scope', 'data', function ($scope, Data) {
    console.log(Data.test);//输出spa2 可以通信
}]);
app.controller('spa2Controller', ['$scope', 'data',function ($scope, Data) {
    Data.title = 'spa2';
    console.log(Data.title);//输出spa2 可修改
    //增加属性 spa1Controller使用
    Data.test = '增加test属性';
    $scope.data = Data;
}]);