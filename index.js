'use strict';
function makeCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        }
    };
}

let counter = makeCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
