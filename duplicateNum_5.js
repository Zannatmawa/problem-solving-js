const duplicateArr = [1, 2, 2, 3, 4, 4];

let result = [];

for (let i = 0; i < duplicateArr.length; i++) {
    if (!result.includes(duplicateArr[i])) {
        result.push(duplicateArr[i]);
    }
}

console.log(result)


