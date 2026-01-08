// const number = [1, 2, 3, 4, 5, 6]

function FindEvenNum(number) {
    let evenNum = []
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            evenNum.push(number[i])
        }
    }
    return evenNum;
}
console.log(FindEvenNum([1, 2, 3, 4, 5, 6]))
//done
// 2