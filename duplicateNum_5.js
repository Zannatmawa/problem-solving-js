// const duplicateArr = [1, 2, 2, 3, 4, 4];



function DuplicateNum(duplicateArr) {
    let result = [];

    for (let i = 0; i < duplicateArr.length; i++) {
        if (!result.includes(duplicateArr[i])) {
            result.push(duplicateArr[i]);
        }
    }
    return result;
}
console.log(DuplicateNum([1, 2, 2, 3, 4, 4]))


//done