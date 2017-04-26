/**
 * Created by Administrator on 2017/4/25 0025.
 */
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', 'dataProvider', function($routeProvider, $locationProvider,dataProvider ){
    $routeProvider
        .when('/spa1', {
            templateUrl: 'spa1.html',
            controller: 'spa1Controller'
        })
        .otherwise({
            templateUrl: 'spa2.html',
            controller: 'spa2Controller'
        });
    dataProvider.setVersion('config');
}]);
//provider
//what:是他们的老大，上面的几乎(除了constant)都是provider的封装，provider必须有一个$get方法，当然也可以说provider是一个可配置的factory
app.provider('data', function () {
    var version;
    return {
        //在config使用 设置参数
        setVersion: function (value) {
            version = value;
        },
        //在controller中返回数据，或方法
        $get: function () {
            return {
                title: version
            }
        }
    }
});
app.controller('ctrlMain', ['$scope', function ($scope) {
}]);
app.controller('spa1Controller', ['$scope', 'data', function ($scope, Data) {
    $scope.data = Data;
}]);app.controller('spa2Controller', ['$scope', 'data',function ($scope, Data) {
    //alert('spa2Controller');
    console.log(Data);
    Data.title += '共享spa2';
    $scope.data = Data;
}]);