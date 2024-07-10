function arrayAddition(array) {
    let total = 0;
    for (let i of array) {
        if (i instanceof Array) {
            total = total + arrayAddition(i);
        } else {
            total = total + i;
        }
        
    }

    return total;
}

const nestedArray = [1, [[[[2]]]], [[3]], 4];
console.log(arrayAddition(nestedArray));