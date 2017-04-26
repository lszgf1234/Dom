//查询
var arr = [
    {
        //一楼
        name: '赵1',
        id:00
    },
    {
        //二楼
        name: '钱1',
        id:10 ,
        data:[
            {
                name: '赵1',
                id:00,
                reply_name:'钱1',
                reply_id:10
            },
            {
                name: '孙1',
                id:20,
                reply_name:'赵1',
                reply_id:00
            }
        ]
    }
];
$scope.replay = function(m){
    //发送数据包
    //  回复人id
    var repaly,data;
    data = {
        name: '赵1',
        id:00,
        reply_name: m.name,
        reply_id: m.id
    }
    http.post(url ,data).success(function(rsp){
        //成功后执行的操作
    })
}

