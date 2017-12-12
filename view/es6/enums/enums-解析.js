/**
 * Created by Administrator on 2017/12/12.
 */

var applyTypes = [
    { id: 0, key: "system" },
    { id: 2, key: "custom"}
];

var applyStatus = [
    { id: 0, key: "disabled"},
    { id: 1, key: "enabled"}
];

export default {
    applyTypes,
    applyStatus
};

import person1 from 'person1';
import person2 from 'person2';
import person3 from 'person3';
import person4 from 'person4';

let person = $.extend({},
    person1,
    person2,
    person3,
    person4
);
window.newperson = [];
for (var key1 in person) {
    //newperson[key] = person[key];
    var arr = [];
    for (var i = 0; i < person[key1].length; i++) {
        arr[person[key1][i]['key']] = person[key1][i];
    }
    window.newperson[key1] = arr;
}
//目的获取id
newperson.applyTypes.system.id

/*
var person = {
    applyTypes:[
        { id: 0, key: "system" },
        { id: 1, key: "enabled"}
    ],
    applyStatus: [
        { id: 0, key: "disabled"},
        { id: 1, key: "enabled"}
    ]
};
var newperson = [];
for(var key1 in person){
    //newperson[key] = person[key];
    var arr = [];
    for(var i=0 ;i<person[key1].length;i++ ){
        arr[person[key1][i]['key']] = person[key1][i];
    }
    newperson[key1] = arr;
}

person = {
    applyTypes: {
        system :{ id: 0, key: "system" },
        enabled: { id: 1, key: "enabled"}
    },
    applyStatus: {
        disabled: { id: 0, key: "disabled"},
        custom: { id: 2, key: "custom"}
    }

};

person = [
    [
        { id: 0, key: "system" },
        { id: 1, key: "enabled"}
    ],
    [
        { id: 0, key: "disabled"},
        { id: 2, key: "custom"}
    ]
]
var newperson = [];
for(var key1 in person){
    //newperson[key] = person[key];
    var arr = [];
    for(var i=0 ;i<person[key1].length;i++ ){
        arr[person[key1][i]['key']] = person[key1][i];
    }
    newperson[key1] = arr;
}*/
