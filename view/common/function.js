/**
 * Created by Administrator on 2018/1/4.
 */
/**Ŀ¼
 * 1.�ַ�
*/

//1.�ַ���תdom
function strToDom(str){
    var div = document.createElement('div');
    div.innerHTML = str;
    var dom = str.firstElementChild;
    return dom;
}
//where + how
//eg1(es6)
import test2 from './test2.html'
var testDom = strToDom(test2);

//eg2(es5)
var testDom = strToDom('<ul id="ul"><li id="li"><a href="">aaa</a></li></ul>');