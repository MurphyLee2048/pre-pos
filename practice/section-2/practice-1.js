'use strict';

function countSameElements(collection) {
var map1 = new Map();;  // 用来存储结果的键值对
// 遍历数组
for (var i = 0;i<collection.length;i++){
if(map1.has(collection[i])){
var count = map1.get(collection[i]);
count++;
map1.set(collection[i],count);
}  // 比较
else{
map1.set(collection[i],1)
}  // 如果不存在，则写入map1
}

//var res = [];
//for (var key in map1) {
//res.push({"key":key,"count":map1[key]});
//}
var res = [];
for (var [key, count] of map1) {
    res.push({"key":key,"count":count});
}
console.log(map1);
console.log(res);
return res;
}
