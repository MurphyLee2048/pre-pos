'use strict';

function createUpdatedCollection(collection, objectB) {
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

    var collectionC = [];
    for (var [key, count] of map1) {
        collectionC.push({"key":key,"count":count});
    }
console.log(map1);

    var collectionB = objectB.value;  //  ["a", "d", "e", "f"]
    for (var i = 0; i < collectionB.length; i ++) {
        for (var j = 0; j < collectionC.length; j ++) {
            if (collectionC[j].key == collectionB[i]) {
                collectionC[j].count = collectionC[j].count - Math.floor(collectionC[j].count/3);  // 满三减一
                console.log(collectionC[j].count);
            }
        }
    }
console.log(collectionC);
return collectionC;
}
