/**
 * Created by lishuai on 2017/2/23.
 */
angular.module('app', [])
    .controller('myCtr', function ($scope) {
        $scope.arr = [
            {
                //一楼
                name: '赵1',
                id: 00,
                date: new Date() * 1,
                message: '我是一楼',
                pc: '/untitled1/img/1DECD80DDF9828C466DC6F631028F7EC.jpg'
            },
            {
                //二楼
                name: '钱1',
                id: 10,
                date: new Date() * 1,
                message: '我是二楼',
                pc: '/untitled1/img/1DECD80DDF9828C466DC6F631028F7EC.jpg',
                data: [
                    {
                        name: '赵1',
                        id: 00,
                        date: new Date() * 1,
                        pc: '/untitled1/img/1DECD80DDF9828C466DC6F631028F7EC.jpg',
                        message: '我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1我赵1回复钱1',
                        reply_name: '钱1',
                        reply_id: 10
                    },
                    {
                        name: '孙1',
                        id: 20,
                        date: new Date() * 1,
                        pc: '/untitled1/img/1DECD80DDF9828C466DC6F631028F7EC.jpg',
                        reply_name: '赵1',
                        reply_id: 00
                    }
                ]
            }
        ];
        var self;
        var  init = function(){
            self = {
                name: '老李',
                pc:'/untitled1/img/1DECD80DDF9828C466DC6F631028F7EC.jpg',
                id:'s',
                message:'',
            };
        }
        init();
        //提交数据
        var updata  = function(){
            var url = '';
            $http.post(url,data,function(rsp){
                $scope.arr.push(data);
                $scope.message = '';
            });
        };
        //
        $scope.talk = function(a){
            a.show=true;
            self.floor = a;
        };
        $scope.sureTalk = function (a) {
            if($scope.message){
                self.id+=new Date()*1;
                //回复楼层
                if(a){
                    (!a.data) && (a.data = []);
                    a.data.push(self);
                    //格式化self
                    init();
                }else{
                    //新建楼层
                    self.message = $scope.message ;
                    //updata(data);
                    $scope.arr.push(data);
                    init();
                    $scope.message = '';
                }
            }
        }
    });
