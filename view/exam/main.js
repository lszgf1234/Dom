/**
 * Created by lishuai on 2017/4/6.
 */
var app = angular.module('app', []);
app.controller('myCtr', ['$scope', function ($scope) {
//        数据  答案前台
    var json;
    json = {
        "data_schemas": [
            {
                "schema": {
                    "id": "c1001",
                    "title": "单选1",
                    "type": "single",
                    "ops": [
                        {
                            "v": "v1",
                            "l": "非常同意",
                            //"score": 5
                        },
                        {
                            "v": "v2",
                            "l": "同意",
                            //"score": 4
                        },
                        {
                            "v": "v3",
                            "l": "一般",
                            //"score": 3
                        },
                        {
                            "v": "v4",
                            "l": "有待提高",
                            //"score": 2
                        },
                        {
                            "v": "v5",
                            "l": "不同意",
                            //"score": 1
                        }
                    ]
                },
                "config": {
                    "required": "Y",
                    "showname": "label",
                    "component": "R",
                    "align": "V",
                    "pl_score": 10,//每一道题分数 管理端设置
                    //"mean_score": "",//单个选项分数 设置时计算所得
                    "site_score": 0,//用户得分 答题时提交计算所得
                    "pl_answer": "v1",//每一道题答案 管理端设置
                    "site_answer": []//用户答案 答题时提交保存，计算得分
                }
            },
            {
                "schema": {
                    "id": "c1002",
                    "title": "多选1",
                    "type": "multiple",
                    "ops": [
                        {
                            "v": "v1",
                            "l": "A.选项",
                            //"score": 5
                        },
                        {
                            "v": "v2",
                            "l": "B.选项",
                            //"score": 5
                        },
                        {
                            "v": "v3",
                            "l": "C.选项",
                            //"score": 5
                        },
                        {
                            "v": "v4",
                            "l": "D.选项",
                            //"score": 5
                        }
                    ]
                },
                "config": {
                    "required": "Y",
                    "showname": "label",
                    "component": "R",
                    "align": "V"
                    "pl_score": 10,//每一道题分数 管理端设置
                    "mean_score": 5,//单个选项分数 设置时计算所得
                    "site_score": 0,//用户得分 答题时提交计算所得
                    "pl_answer": ['v1', 'v3'],//每一道题答案 管理端设置
                    "site_answer": [],//用户答案 答题时提交保存，计算得分
                }
            }
        ]
    };
    $scope.data = {
        //单选
        c1001: '',
        //多选
        c1002:{},
    };
    $scope.submit = function(){
        angular.forEach($scope.data, function(d, key){
            angular.forEach(json.data_schemas, function(s){
                var schema = s.schema;
                if(key === schema.id){
                    if(schema.type==='single'){
                       if(d===schema.pl_answer){
                           schema.site_score = schema.pl_score;
                       }
                    }else if(schema.type==='multiple'){
                        //出现错误答案不执行代码 分数清零，答案不进行复核，增加一个状态
                        var answerErrol = true ;
                        angular.forEach(d, function(answer, key_answer){
                            if(answer === true && answerErrol){
                                if(schema.pl_answer.indexOf(key_answer) !== -1){
                                    schema.site_score += schema.mean_score;
                                }else{
                                    schema.site_score = 0;
                                    answerErrol = false
                                }
                            }
                        })
                    }
                }
            })
        });
        console.log(json,$scope.data);
    }
}]);