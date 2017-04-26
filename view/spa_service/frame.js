/**
 * Created by Administrator on 2017/4/25 0025.
 */
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/spa1', {
            templateUrl: 'spa1.html',
            controller: 'spa1Controller'
        })
        .otherwise({
            templateUrl: 'spa2.html',
            controller: 'spa2Controller'
        });
    //console.log(Data);

}]);
//serive 它是一个可注入的构造器，在AngularJS中它是单例的，用它共享数据和封装方法都很合适
//由于是构造器,里面的代码，每次都没被init.
//在service里面可以不用返回东西，因为AngularJS会调用new关键字来创建对象。但是返回一个自定义对象好像也不会出错。
app.service('data', function(){
    //封装变量
    this.title = 'service';
    //封装函数
    this.setValue = function(v){this.value = v}
});
app.controller('ctrlMain', ['$scope', function ($scope) {
}]);
app.controller('spa1Controller', ['$scope', 'data', function ($scope, Data) {
    $scope.data = Data;
}]);app.controller('spa2Controller', ['$scope', 'data',function ($scope, Data) {
    //alert('spa2Controller');
    Data.title = '共享spa2';
    console.log(Data.title);//输出 共享spa2
    Data.setValue('spa2');
    console.log(Data.value);//输出 spa2
    $scope.data = Data;
}]);