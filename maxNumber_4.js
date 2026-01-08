const max = [1, 2, 3, 4, 5]

let maxNum = max[0]
for (let i = 1; i < max.length; i++) {
    if (max[i] > maxNum) {
        maxNum = max[i]
    }

}
console.log(maxNum)