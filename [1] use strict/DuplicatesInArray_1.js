"use strict";

function isDuplicatesInArray(array){
    if(!Array.isArray(array)) throw new Error('Args is not array')

    return array.length != new Set(array).size;
}

console.log(isDuplicatesInArray([1, 2, 3, 3]))