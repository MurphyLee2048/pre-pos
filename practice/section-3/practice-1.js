'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var collectionB = objectB.value;  //  ["a", "d", "e", "f"]
    for (var i = 0; i < collectionB.length; i ++) {
        for (var j = 0; j < collectionA.length; j ++) {
            if (collectionA[j].key == collectionB[i]) {
                collectionA[j].count = collectionA[j].count - 1;
                console.log(collectionA[j].count);
            }
        }
    }
console.log(collectionA);
return collectionA;
}
