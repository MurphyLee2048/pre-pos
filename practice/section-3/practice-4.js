'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var map1 = new Map();;  // 用来存储结果的键值对
    // 遍历数组
    for (var i = 0;i<collectionA.length;i++){
        if(collectionA[i].length > 1) {
            map1.set(collectionA[i].charAt(0),parseInt(collectionA[i].charAt(2)));
        }
        else {
            if(map1.has(collectionA[i])){
                var count = map1.get(collectionA[i]);
                count++;
                map1.set(collectionA[i],count);
            }  // 比较
            else{
                map1.set(collectionA[i],1)
            }  // 如果不存在，则写入map1
        }
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
