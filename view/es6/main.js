/**
 * Created by Administrator on 2017/12/21.
 */
"use strict";
var f = v => v;
//等价于
var f = function (v) {
    return v;
};

var f = (v)=> v

var f = (v) => {
    if (1) {
    }
    if (2) {
    }
    return v;
};

var f = v => {
    if (1) {
    }
};

var timer = setInterval(v=>v
    , 1000
);

var timer = setInterval(()=>v
    , 1000
);

[1, 2, 3].map(function (x) {
    return x * x;
});

[1, 2, 3].map((x)=>x * x);

[1, 2, 3].map((x)=> {
    if (x % 2 == 0) {
        return x
    }
});

//过滤器 过滤数据。
// 只要偶数
var arr = [1, 2, 3];
var newArr = [];
arr.map(x => {
    if (x % 2 == 0) {
        newArr.push(x);
    }
});
//排序
var result = [5, 6, 'fg', 4, 'hj'].sort((a, b) => a - b);
var page = {
    total: 100,
    site: 10,
    num: page.total / page.site
};


str.match(/([?&]merge=+)/)

function getCookie(name){
    var arr,
        reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}




























