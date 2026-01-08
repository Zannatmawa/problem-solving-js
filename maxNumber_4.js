// const max = [1, 2, 3, 4, 5]


function MaxNumber(max) {
    let maxNum = max[0]
    for (let i = 1; i < max.length; i++) {
        if (max[i] > maxNum) {
            maxNum = max[i]
        }

    }
    return maxNum
}


console.log(MaxNumber([1, 2, 3, 4, 5]))

//done